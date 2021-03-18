import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Navigator from "./components/Navigator";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    title: "",
  };

  handleLoginClick = (param) => {
    this.setState({ isLoggedIn: param });
  };

  sendValue = (title) => {
    this.setState({ title: title });
  };

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <div className="MainScreen">
            <Navigator sendValue={this.sendValue} />
            <Dashboard
              title={this.state.title}
              handleLoginClick={this.handleLoginClick}
            />
          </div>
        ) : (
          <LoginForm handleLoginClick={this.handleLoginClick} />
        )}
      </div>
    );
  }
}

export default App;
