import React from 'react';
import { Icons } from '../../../assets';
import Button from '../../../components/Button';
const bg =
  // eslint-disable-next-line max-len
  'https://rs-menus-api.roocdn.com/images/0172a091-9ecd-476e-a54a-6787ee4a1c5b/image.jpeg?width=928&height=522&auto=webp&format=jpg&fit=crop';

export default function CoverImage() {
  return (
    <div
      className="em-cover__image"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Button
        filled
        color='secondary'
        title="Start group order"
        icon={Icons.userGroup}
        className="d-block d-sm-none em-cover__image__button"
      />
    </div>
  );
}
