/* eslint-disable no-var */
import React from 'react';
import FooterSection from './FooterSection';

export default function Footer() {
  return (
    <div className="em-footer">
      <div className="container d-flex justify-content-center">
        <div className="row w-100 justify-content-center">
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <FooterSection title="Discover Eat Me" items={mockDiscoverFooter} />
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <FooterSection title="Legal" items={mockLegalFooter} />
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <FooterSection title="Help" items={mockHelpFooter} />
          </div>
        </div>
      </div>
    </div>
  );
}

var mockDiscoverFooter = [
  {
    id: '0',
    value: 'Investors',
    link: '/',
  },
  {
    id: '1',
    value: 'About us',
    link: '/',
  },
  {
    id: '2',
    value: 'Take Away',
    link: '/',
  },
  {
    id: '3',
    value: 'More',
    link: '/',
  },
  {
    id: '4',
    value: 'Newsroom',
    link: '/',
  },
  {
    id: '5',
    value: 'Foodscene blog',
    link: '/',
  },
];

var mockLegalFooter = [
  {
    id: '0',
    value: 'Terms and conditions',
    link: '/',
  },
  {
    id: '1',
    value: 'Privacy',
    link: '/',
  },
  {
    id: '2',
    value: 'Cookies',
    link: '/',
  },
  {
    id: '3',
    value: 'Modern Slavery Statement',
    link: '/',
  },
  {
    id: '4',
    value: 'Tax Strategy',
    link: '/',
  },
  {
    id: '5',
    value: 'Section 172 Statement',
    link: '/',
  },
];

var mockHelpFooter = [
  {
    id: '0',
    value: 'Contact',
    link: '/',
  },
  {
    id: '1',
    value: 'FAQs',
    link: '/',
  },
  {
    id: '2',
    value: 'Cuisines',
    link: '/',
  },
  {
    id: '3',
    value: 'Brands',
    link: '/',
  },
];
