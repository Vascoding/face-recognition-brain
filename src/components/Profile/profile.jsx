import React from "react";
import Form from "../Forms/form";
import profileIcon from "../../profileIcon.png";
import EntryCount from "./entryCount";
import Loader from "./../common/loader";
import { Redirect } from "react-router-dom";
import StatusMessage from "./../common/statusMessage";
import "./profile.css";

class Profile extends Form {
  state = {
    account: {
      password: "",
      newPassword: "",
      confirmPassword: ""
    },
    loading: false,
    status: { type: "", message: "" },
    errors: {}
  };
  render() {
    const className =
      "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100";
    const classes = "b ph3 pv2 input-reset ba b--black grow pointer f6 dib btn";
    const { loading } = this.state;
    const {
      name,
      email,
      entries,
      faceEntries,
      apparelEntries,
      foodEntries,
      generalEntries,
      colorEntries
    } = this.props.user;
    if (this.props.userId) {
      return (
        <React.Fragment>
          <div className="box">
            <div className="container">
              <div className="left">
                <div className="image">
                  <img src={profileIcon} alt="" />
                </div>
                {this.renderField("Name", name, "profile")}
                {this.renderField("Email", email, "profile")}
                {this.renderInput(
                  "password",
                  "password",
                  "password",
                  className,
                  "Old password"
                )}
                {this.renderInput(
                  "password",
                  "newPassword",
                  "newPassword",
                  className,
                  "New password"
                )}
                {this.renderInput(
                  "password",
                  "confirmPassword",
                  "confirmPassword",
                  className,
                  "Confirm password"
                )}
                <input
                  onClick={() => this.onSubmitResetPassword(email)}
                  className={loading ? classes : classes + " bg-transparent"}
                  type="button"
                  value="Change password"
                  disabled={loading}
                />
                {this.state.status.type !== "" && (
                  <StatusMessage
                    type={this.state.status.type}
                    message={this.state.status.message}
                  />
                )}
                <div className="sweet-loading" style={{ marginTop: 20 }}>
                  <Loader loading={loading} />
                </div>
              </div>
              <EntryCount
                entries={entries}
                face={faceEntries}
                apparel={apparelEntries}
                food={foodEntries}
                general={generalEntries}
                colorEntries={colorEntries}
              />
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return <Redirect from="/profile" to="/login" />;
    }
  }
}

export default Profile;
