import React from 'react';
import PropTypes from 'prop-types';
import GridResolver  from '../../context/GridResolver';

const ScreenClassRender = ({ render }) => (
  <GridResolver >
    {(screenClass) => render(screenClass)}
  </GridResolver >
);

ScreenClassRender.propTypes = {
  render: PropTypes.func.isRequired,
};

export default ScreenClassRender;
