import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Card from '../../components/Card';
import { LOCAL_STORAGE_KEY } from '../../constants';
import { resetStore } from '../Question/actions';
import './SurveySuccess.css';

class SurveySuccess extends Component {
  static getAnswer(question) {
    return question.answer;
  }

  constructor(props) {
    super(props);
    this.navigateBack = this.navigateBack.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  navigateBack() {
    this.props.history.goBack();
  }

  resetForm() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    this.props.resetStore();
    this.props.history.go(-this.props.questions.length);
  }

  render() {
    return (
      <React.Fragment>
        <div className="survey-success-wrapper">
          <Card className="card--survey-success ">
            <div className="card--survey--banner">
              <Row>
                <h1>Diet</h1>
              </Row>
              <Row className="justify-content-center ">
                <h3 >Your Score</h3>
              </Row>
            </div>
            <div className="text-center card--survey--success--summary">
              UK National Average: 2.9 Tonnes <br /> of CO2 produced per year
            </div>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.question.questionData.questions,
});

const mapDispatchToProps = dispatch => ({
  resetStore: () => dispatch(resetStore()),
});

SurveySuccess.propTypes = {
  questions: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  resetStore: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SurveySuccess));
