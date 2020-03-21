import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import './CardFooter.css';

const CardFooter = props => (
  <footer className="clearfix card-footer">
    <Button
      fieldValue={props.fieldValue}
      buttonClick={props.clickSubmit}
      className="button--success cta btn-lg"
    >
      SUBMIT
    </Button>
    <br />
    <Button buttonClick={props.clickBack} className="button--flat">
      BACK
    </Button>
  </footer>
);

CardFooter.defaultProps = {
  fieldValue: '',
};

CardFooter.propTypes = {
  fieldValue: PropTypes.string,
  clickBack: PropTypes.func.isRequired,
  clickSubmit: PropTypes.func.isRequired,
};

export default CardFooter;
