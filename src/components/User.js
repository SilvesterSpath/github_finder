import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    const login = this.props.match.params.login;
    this.props.getUser(login);
  }

  render() {
    const {
      name,
      avatar,
      url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
    } = this.props.user;

    const { loading } = this.props;
    return <div>{name}</div>;
  }
}

export default User;
