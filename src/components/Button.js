import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '../theme/index.scss';

export default function Button({
  title,
  onClick,
  icon,
  className,
  filled = false,
  iconSize = '1x',
  color = 'primary',
}) {
  let iconColor;
  switch (color) {
    case 'secondary':
      iconColor = colors.secondaryColor;
      break;

    case 'error':
      iconColor = colors.errorColor;
      break;

    default:
      iconColor = colors.primaryColor;
      break;
  }

  // setting text color to white when filled
  if (filled) {
    iconColor = colors.whiteColor;
  }

  return (
    <button
      onClick={onClick}
      className={cn('em-button', className, {
        'em-button--primary': filled && color === 'primary',
        'em-button--secondary': filled && color === 'secondary',
        'em-button--error': filled && color === 'error',
      })}
    >
      {icon ? (
        <FontAwesomeIcon
          size={iconSize}
          icon={icon}
          color={iconColor}
          className="em-button__icon"
        />
      ) : null}

      {title ? <span className="em-button__title">{title}</span> : null}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  filled: PropTypes.bool,
  icon: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'error']),
  iconSize: PropTypes.oneOf([
    'xs',
    'lg',
    'sm',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ]),
};
