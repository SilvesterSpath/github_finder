import React, { Fragment } from 'react';
import UserItem from './UserItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const Users = (props) => {
  return (
    <Fragment>
      {props.loading ? (
        <Spinner />
      ) : (
        <div style={userStyle}>
          {props.users.map((i) => (
            <UserItem key={i.id} user={i} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
