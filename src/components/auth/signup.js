import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: {email, password, confirmPassword} } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input className="form-control" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input className="form-control" type="password" {...password} />
          {password.touched && confirmPassword.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm password</label>
          <input className="form-control" type="password" {...confirmPassword}/>
          {confirmPassword.touched && confirmPassword.error && <div className="error">{confirmPassword.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button className="btn btn-primary" action="submit">Sign up</button>
      </form>
    )
  }
}

function validate(formProps) {
  const errors = {};

  if (formProps.password !== formProps.confirmPassword) {
    errors.password = 'Passwords must match';
  }

  if (!formProps.password) {
    errors.password = 'Please enter an password';
  }

  if (!formProps.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }
  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const formOptions = {
  form: 'signup',
  fields: ['email', 'password', 'confirmPassword'],
  validate
};

export default reduxForm(formOptions, mapStateToProps, actions)(Signup);
