import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { inject, observer } from "mobx-react";
let url = "https://jsonplaceholder.typicode.com/users";

@inject("MainStore")
@observer
class Students extends React.Component {
  state = {
    users: [],
    error: "",
    studId: "",
  };

  columns = [
    {
      title: "Имя студента",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Имя пользователя",
      dataIndex: "username",
      key: "username",
    },
  ];

  componentDidMount = async () => {
    let users = [];
    try {
      const result = await fetch(url);
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
    const { MainStore } = this.props;

    return (
      <div>
        <h1>Список студентов</h1>
        <div>Вы выбрали студента под id: {this.state.studId}</div>
        <h2>{error}</h2>
        <Table
          dataSource={users}
          columns={this.columns}
          onRow={(record) => {
            return {
              onClick: (event) => {
                let id = record.id;
                this.setState({ studId: id });
                MainStore.pushElementArray(id);
                MainStore.changeCurrentNav(5);
                // this.props.parentFunc({ id });
              }, // click row
            };
          }}
          rowClassName={(record, index) =>
            MainStore.arrayCount.indexOf(record.id) !== -1
              ? "table-row-red-3"
              : "table-row-red-1"
          }
        />
      </div>
    );
  }
}

export default Students;
