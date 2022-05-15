import { Component } from "react";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import UsersTable from "../components/Tables/UsersTable";
import "../App.css";

class UsersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: "",
          user: "",
          name: "",
          email: "",
          address: "",
          detail: "",
        },
      ],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3030/api/users");
    const responseJSON = await response.json();
    const users = responseJSON.data;

    this.setState({
      userList: users,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header />
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Registered Users</h1>
                </div>
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">User</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.userList.map((user) => (
                        <UsersTable
                          id={user.id}
                          user={user.user}
                          name={user.name}
                          email={user.email}
                          address={user.address}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersScreen;
