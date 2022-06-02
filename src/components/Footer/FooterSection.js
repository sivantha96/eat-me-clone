import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FooterSection = ({ title, items = [] }) => {
  return (
    <div className="em-footer__section">
      <h3 className="em-footer__section__title">{title}</h3>
      {items.map((item) => (
        <Link className="em-footer__section__item" key={item.id} to={item.link}>
          {item.value}
        </Link>
      ))}
    </div>
  );
};

FooterSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default FooterSection;
