import React from "react";
import { Table } from "antd";
import { inject, observer } from "mobx-react";
import "antd/dist/antd.css";
import MainStore from "./store/MainStore";
let url = "https://jsonplaceholder.typicode.com/posts?userId=";

@inject("MainStore")
@observer
class Courses extends React.Component {
  state = {
    users: [],
    error: "",
    id: "",
    StudId: "",
  };

  columns = [
    {
      title: "id-студента",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Номер курсовой работы",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Название курсовой",
      dataIndex: "title",
      key: "title",
    },
  ];

  componentDidMount = async () => {
    let users = [];
    const { MainStore } = this.props;
    try {
      const result = await fetch(url + MainStore.id);
      users = await result.json();
    } catch (err) {
      this.setState({
        error: "Ошибка получения данных",
      });
    }

    this.setState({
      users,
    });
  };

  render() {
    const { error, users } = this.state;
    return (
      <div>
        <h1>Список курсовых</h1>
        <h2>{error}</h2>
        <Table dataSource={users} columns={this.columns} />
      </div>
    );
  }
}

export default Courses;
