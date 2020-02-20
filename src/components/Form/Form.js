import React, { Component } from "react";
import "./form.scss";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: "",
      user_surname: "",
      user_description: "",
      user_avatar_url: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { showModal } = this.props;
    const { user_name, user_surname, user_description, user_avatar_url } = this.state;
    Promise.all([
      fetch("/user/save-data", {
        method: "POST",
        body: JSON.stringify({
          user_name,
          user_surname,
          user_description,
          user_avatar_url
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }),
      fetch("/user/save-url", {
        method: "POST",
        body: JSON.stringify({
          user_avatar_url
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
    ]).then(responses => {
      if (responses[0].ok && responses[1].ok) {
        if (typeof showModal === "function") {
          showModal(false);
        }
      }
    });
  };

  render() {
    return (
      <div className="modal">
        <form onSubmit={this.handleSubmit}>
          <label>
            Imię
            <input type="text" name="user_name" onChange={this.handleOnChange} />
          </label>
          <label>
            Nazwisko
            <input type="text" name="user_surname" onChange={this.handleOnChange} />
          </label>
          <label>
            Opis
            <input
              type="text"
              name="user_description"
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Link do strony
            <input type="text" name="user_avatar_url" onChange={this.handleOnChange} />
          </label>
          <button type="submit" className="button">
            <p>Wyślij</p>
          </button>
        </form>
      </div>
    );
  }
}
