import React from 'react';
import CoverDetails from './CoverDetails';
import CoverImage from './CoverImage';

const Cover = React.forwardRef((_props, ref) => {
  return (
    <div ref={ref} className="em-cover em-container">
      <CoverImage />
      <CoverDetails />
    </div>
  );
});

Cover.displayName = 'Cover';

export default Cover;
