//Sign In form (second route from mockup photo)
//Now we'll use Redux form

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  render() {
    <form>
      <fieldset className="form-group">
      <label>Email:</label>
      <input className="form-control" />
      </fieldset>
      <fieldset className="form-group">
      <label>Password:</label>
      <input className="form-control" />
      </fieldset>
    </form>
  }
}

// helper to declare needed fields; 1st pass config, 2nd pass arg/signin
export default reduxForm({
  form: 'sigin',
  fields: ['email', 'password']
})(Signin);
