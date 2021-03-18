import React from "react";
import StyleNavigator from "./Navigator.module.css";
import { IoAccessibility } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { VscBroadcast } from "react-icons/vsc";
import Students from "./Students";
import Courses from "./Courses";
import { inject, observer } from "mobx-react";
import MainStore from "./store/MainStore";

@inject("MainStore")
@observer
class Navigator extends React.Component {
  state = {
    users: [],
    error: "",
    StudId: "",
    black: true,
  };
  buttonArray = [
    {
      text: "ФИО",
      icon: <IoAccessibility />,
      title: "Ефремов Михаил Андреевич",
      index: 1,
    },
    {
      text: "Группа",
      icon: <AiOutlineUsergroupAdd />,
      title: "Ир1-17",
      index: 2,
    },
    {
      text: "Возраст",
      icon: <VscBroadcast />,
      title: "19 лет",
      index: 3,
    },
    {
      text: "Студенты",
      icon: <VscBroadcast />,
      title: <Students />,
      index: 4,
    },
    {
      text: "Курсовые",
      icon: <VscBroadcast />,
      title: <Courses />,
      index: 5,
    },
  ];

  parentFunc = (id) => {
    this.setState({
      studId: id,
    });
  };


  render() {
    const { MainStore } = this.props;
    return (
      <div className={StyleNavigator.navigator}>
        {this.buttonArray.map((button, ind) => (
          <div>
            {button.icon}
            <button
              className={StyleNavigator.but}
              onClick={() => {
                this.props.sendValue(button.title);
                MainStore.changeCurrentNav(button.index);
              }}
            >
              {button.text}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Navigator;
