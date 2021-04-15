import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Search from './components/Search';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  /*   async componentDidMount() {
    this.setState({ loading: true });

    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
    console.log(this.state.users);
  } */

  // Search Github users
  searchUsers = async (text) => {
    this.setState({
      loading: true,
    });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
    console.log(text);
  };

  // clear users from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  render() {
    const { users, loading } = this.state;

    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            users={users}
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
