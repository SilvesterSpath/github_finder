import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map((i) => <RepoItem key={i.id} repo={i} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
