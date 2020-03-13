import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

//import Button from '../../components/Button';
import './Landing.css';

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
      <Container className="landing-view">
        <div className="landing-view-content">
          <h1>Calculate your personal Pawprint</h1>
          <p>Next we have a short 2-3 minute survey covering Diet, Home, Travel and Other that will let us caclulate your personal carbon footprint (or Parprint as we like to call it).</p>
          <div>
            <Button onClick={this.startSurvey} className="button--large">Take the survey</Button>
          </div>
        </div>
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
