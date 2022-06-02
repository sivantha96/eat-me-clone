import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import cn from 'classnames';

const createPortalRoot = () => {
  const portal = document.createElement('div');
  portal.setAttribute('id', 'drawer-root');

  return portal;
};

const DrawerPanel = ({ isOpen, children, className, onClose, position = 'right' }) => {
  const bodyRef = useRef(document.querySelector('body'));
  const portalRef = useRef(document.getElementById('drawer-root') || createPortalRoot());

  // Append portal root on mount
  useEffect(() => {
    bodyRef.current.appendChild(portalRef.current);
    const portal = portalRef.current;
    return () => {
      portal.remove();
    };
  }, []);

  // prevent scrolling when the drawer is open
  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        bodyRef.current.style.overflow = 'hidden';
      } else {
        bodyRef.current.style.overflow = '';
      }
    };
    updatePageScroll();
  }, [isOpen]);

  // dismiss the drawer with esc key
  useEffect(() => {
    const onKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keyup', onKeyPress);
    }

    return () => {
      window.removeEventListener('keyup', onKeyPress);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <div
      aria-hidden={isOpen ? 'false' : 'true'}
      className={cn(
        'em-drawer__container',
        {
          open: isOpen,
        },
        className
      )}
    >
      <div className={cn('em-drawer', position)} role="dialog">
        {children}
      </div>
      <div className="em-drawer__backdrop" onClick={onClose} />
    </div>,
    portalRef.current
  );
};

DrawerPanel.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right']),
};

export default DrawerPanel;
