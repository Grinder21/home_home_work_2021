import React from "react";
import StyleLoginForm from "./LoginForm.module.css";

class LoginForm extends React.Component {
  handleClick = () => {
    const { handleLoginClick } = this.props;
    handleLoginClick(true);
  };

  render() {
    // const { onButtonClick } = this.props;

    return (
      <div className={StyleLoginForm.mainDiv}>
        <div className={StyleLoginForm.childrenDiv}>
          <input className={StyleLoginForm.mainInput} type="text" required />
          <button className={StyleLoginForm.loginButton} onClick={this.handleClick}>Войти</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
