import React, { Component } from "react";
import './profile.css'

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      Users: [],
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/users/?limit=1")
      .then((response) => response.json())
      .then((data) => this.setState({ Users: data.users[0] }));
  }

  render() {
    const { Users } = this.state;

    if (Users.length == 0) {
        console.log(Users)
      return <div> Loading🏃</div>;
    }

    const user = Users;

    return (
      <div className="container profile-container">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <img src={user.image} alt="Profile" />
          </div>
          <div className="col-md-8">
            <div className="profile-info">
              <h1>
                {user.firstName} {user.lastName}
              </h1>
              <p>
                {user.company.title} - {user.company.department}
              </p>
              <div className="information">
                <ul className="list-unstyled">
                  <li>
                    <strong>Manager:</strong> {user.company.name}
                  </li>
                  <li>
                    <strong>Office Location:</strong> {user.address.city} (
                    {user.address.country})
                  </li>
                  <li>
                    <strong>Date of Joining:</strong> {user.birthDate}
                  </li>
                  <li>
                    <strong>Email Address:</strong> {user.email}
                  </li>
                  <li>
                    <strong>LinkedIn:</strong> {user.username}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
