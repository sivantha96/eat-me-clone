import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Icons } from '../../../assets';
import colors from '../../../theme/index.scss';
import Button from '../../../components/Button';

export default function Basket() {
  return (
    <div className="em-basket">
      <FontAwesomeIcon
        className="my-4"
        size="4x"
        icon={Icons.shoppingBasket}
        color={colors.lightGrayColor}
      />

      <span className="mb-4">Your basket is empty</span>
      <Button filled title="Go to checkout" disabled className="w-100" />
    </div>
  );
}
