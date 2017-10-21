//Sign In form (second route from mockup photo)
//Now we'll use Redux form
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    //Need to do something to log user in; expects email/pw as object so use curly brackets
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Ooops!</strong> {this.props.errorMessage}
        </div>
      );
        }
    }


  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

     return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className="form-group">
        <label>Email:</label>
        <input {...email} className="form-control" />
      </fieldset>
      <fieldset className="form-group">
        <label>Password:</label>
        <input {...password} type="password" className="form-control" />
      </fieldset>
      {this.renderAlert()}
      <button action="submit" className="btn btn-primary">Sign in</button>
    </form>
  );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

// helper to declare needed fields; 1st pass config, 2nd pass arg/signin
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
