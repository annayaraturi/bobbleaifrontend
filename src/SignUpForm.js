import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import PasswordStr from "./PasswordStr";
import "./style.css";

const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange
}) => {
  return (
    <div className="loginBox">
      <h1>SIGN UP</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          floatingLabelText="First Name"
          value={user.username}
          onChange={onChange}
          errorText={errors.username}
        />
        <TextField
          name="username"
          floatingLabelText="Last Name"
          value={user.username}
          onChange={onChange}
          errorText={errors.username}
        />
        <TextField
          name="email"
          floatingLabelText="Email Address"
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
        />
        <TextField
          type={type}
          name="password"
          floatingLabelText="Password"
          value={user.password}
          onChange={onPwChange}
          errorText={errors.password}
        />

        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} />
              <FlatButton
                className="pwShowHideBtn"
                label={btnTxt}
                onClick={pwMask}
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)"
                }}
              />
            </div>
          )}
        </div>
        <p>
          By clicking Sing Up you agree to Our <a href="/"> Terms of use</a> and
          out <a href="/">Privicy Policy </a>
          <br />
        </p>
        <br />
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
        />
      </form>
    </div>
  );
};

export default SignUpForm;
