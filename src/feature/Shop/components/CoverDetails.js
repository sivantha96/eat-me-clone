/* eslint-disable no-var */
import React from 'react';
import Button from '../../../components/Button';
import { Icons } from '../../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '../../../theme/index.scss';

export default function CoverDetails() {
  return (
    <div className="em-cover__details">
      <div className="row">
        <div className="col-12 col-lg-7">
          <h1>{mockDetails.name}</h1>
          <div className="mb-1">Chicken • Salads • Healthy</div>
          <div className="mb-1">
            <span style={{ color: colors.greenColor, marginRight: '5px' }}>
              <FontAwesomeIcon icon={Icons.star} className="me-2" color={colors.greenColor} />
              4.8 Excellent
            </span>
            (500+) • 0.20 miles away • Opens at 11:00 • Free delivery • $7.00 minimum
          </div>
          <div className="em-cover__details__info">
            <FontAwesomeIcon icon={Icons.info} className="me-3" />
            <div className="d-flex flex-column">
              <span>Info</span>
              <span>Map, allergens and hygiene rating</span>
            </div>
            <FontAwesomeIcon
              icon={Icons.chevronRight}
              color={colors.primaryColor}
              className="ms-4"
            />
          </div>
        </div>
        <div className="col-12 col-lg-5 em-cover__details__extra">
          <div className="p-2">
            <FontAwesomeIcon icon={Icons.deliveryPerson} className="me-2" /> Deliver
            <Button round size="small" noBorder title="Change" className="ms-2" />
          </div>
          <Button title="Start group order" icon={Icons.userGroup} className="d-none d-sm-block" />
        </div>
      </div>

      <Button filled icon={Icons.tag} className="my-3">
        <strong>20% off entire menu</strong>
        <span> - {mockDetails.button}</span>
      </Button>
    </div>
  );
}

var mockDetails = {
  name: "Tossed - St Martin's Lane",
  button: 'For orders over £35. T&Cs apply',
};
