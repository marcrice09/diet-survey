import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = props => (
  <nav className="navbar">
  </nav>
);

Header.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default Header;
