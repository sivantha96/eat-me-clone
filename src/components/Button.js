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
  children,
  filled = false,
  round = false,
  noBorder = false,
  size = 'regular',
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
  if (filled && color === 'secondary') {
    iconColor = colors.primaryColor;
  } else if (filled) {
    iconColor = colors.whiteColor;
  }

  return (
    <button
      onClick={onClick}
      className={cn('em-button', className, {
        'em-button--primary': filled && color === 'primary',
        'em-button--secondary': filled && color === 'secondary',
        'em-button--error': filled && color === 'error',
        'em-button--primary--no-border': noBorder && color === 'primary',
        'em-button--secondary--no-border': noBorder && color === 'secondary',
        'em-button--error--no-border': noBorder && color === 'error',
        'em-button--round': round,
        'em-button--regular': size === 'regular',
        'em-button--large': size === 'large',
        'em-button--small': size === 'small',
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
      {children}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  filled: PropTypes.bool,
  round: PropTypes.bool,
  noBorder: PropTypes.bool,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['regular', 'large', 'small']),
  color: PropTypes.oneOf(['primary', 'secondary', 'error']),
  iconSize: PropTypes.oneOf(['xs', 'lg', 'sm', '1x', '2x', '3x']),
};
