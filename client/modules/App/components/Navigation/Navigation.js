import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './Navigation.css';

const Navigation = (props, context) => (
    <div>
        <ul className={styles.navigation}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Posts</Link></li>
    </ul>
    {props.children}
    </div>
);

Navigation.propTypes = {
};

export default Navigation;