import React from 'react';
import Button from '../Button';

export default function DrawerContent() {
  return (
    <div className="em-drawer__content">
      <div className="em-drawer__content--top">
        <Button filled title="Sign up or log in" className="w-100" color="primary" />
      </div>
      <div className="em-drawer__content--bottom">
        <Button title="English" className="w-100" color="primary" />
      </div>
    </div>
  );
}
