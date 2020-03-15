import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Button, Row } from 'react-bootstrap';

import './Landing.scss';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.startSurvey = this.startSurvey.bind(this);
  }

  startSurvey() {
    this.props.history.push(`/question/${this.props.firstQuestionID}`);
  }

  render() {
    return (
      <Container className="landing-page">
        <Row className="justify-content-md-center ">
          <h1>Calculate your personal Pawprint</h1>
        </Row>
        <Row className="justify-content-md-center">
          <p>
            Next we have a short 2-3 minute survey covering Diet, Home,
            Travel and Other that will let us calculate your personal carbon footprint
            (or Parprint as we like to call it).
          </p>
        </Row>
        <Row className="justify-content-md-center">
          <Button onClick={this.startSurvey} className="button--large" size="lg">Take the survey</Button>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  firstQuestionID: state.question.questionData.questions[0].id,
});

LandingPage.propTypes = {
  firstQuestionID: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(withRouter(LandingPage));
