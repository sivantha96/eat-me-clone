import React from 'react';
import CoverDetails from './CoverDetails';
import CoverImage from './CoverImage';

const Cover = () => {
  return (
    <div className="em-cover">
      <CoverImage />
      <CoverDetails />
    </div>
  );
};

export default Cover;
