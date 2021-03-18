import React from "react";
import StyleDashboard from "./Dashboard.module.css";
import { inject, observer } from "mobx-react";

@inject("MainStore")
@observer
class Dashboard extends React.Component {
  state = {
    name: "Ефремов Михаил Андреевич",
    group: "Ир1-17",
    age: "19 лет",
    studId: "",
  };
  parentFunc = (id) => {
    this.setState({
      studId: id,
    });
  };
  handleClick = () => {
    const { handleLoginClick } = this.props;
    handleLoginClick(false);
  };

  render() {
    const { MainStore } = this.props;
    return (
      <div className={StyleDashboard.dashboard}>
        <h2 className={StyleDashboard.littering}>Dashboard</h2>
        <h3>Проверено курсовых работ: {MainStore.arrayCount.length}</h3>
        <div>{this.props.title}</div>
        <button
          className={StyleDashboard.mainButton}
          onClick={this.handleClick}
        >
          Выйти
        </button>
      </div>
    );
  }
}
export default Dashboard;
