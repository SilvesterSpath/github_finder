import React, { Fragment, useContext } from 'react';
import UserItem from './UserItem';
import Spinner from './Spinner';
import GithubContext from '../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div style={userStyle}>
          {users.map((i) => (
            <UserItem key={i.id} user={i} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
