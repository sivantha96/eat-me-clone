import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Card = ({ children, className }) => {
  return <div className={cn('em-card', className)}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
