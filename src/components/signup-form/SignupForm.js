import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as userAction from './../../actionCreators/users';
import { renderField, validate } from './../../utility';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  

  onSubmit = (e) => {
    e.preventDefault();
    this.props.actions.addUser(this.state);
    console.log(this.state);
  }

  render() {
    const {
      handleSubmit, pristine, reset, submitting, 
    } = this.props;
      
    return (
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <Field 
            name="email" 
            type="text" 
            component={renderField} 
            label="Email"
          />

          <Field 
            name="password" 
            type="password" 
            component={renderField} 
            label="Password"
          />

          <Field 
            name="confirmPassword" 
            type="password" 
            component={renderField} 
            label="Confirm Password"
          />

          <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a>.</p>
          
          <div className="clearfix">
            <button 
              type="submit" 
              className="signupbtn" 
              disabled={submitting} 
              onClick={e => this.onSubmit(e)}
            >
              Sign Up
            </button>
            
            <button type="button" className="cancelbtn" disabled={submitting || pristine} onClick={reset}>Clear</button>
          </div>
         
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({    
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(userAction, dispatch),
});

const connectedSignupForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm);

export default reduxForm({
  form: 'signupForm',
  validate,
})(connectedSignupForm);
