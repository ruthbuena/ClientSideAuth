//Sign In form (second route from mockup photo)
//Now we'll use Redux form

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  render() {

  }
}

// helper to declare needed fields; 1st pass config, 2nd pass arg/signin
export default reduxForm({
  form: 'sigin',
  fields: ['email', 'password']
})(Signin);
