import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'react-redux-form';

class LoginForm extends React.Component {
  render() {
    let { user } = this.props;

    return (
      <form>
        <Field model="user.username">
          <label>Username</label>
          <input type="text" />
        </Field>

        <Field model="user.password">
          <label>Password</label>
          <input type="password" />
        </Field>

        <button>
          Log in as { user.username }
        </button>
      </form>
    )
  }
}

const selector = (state) => ({ user: state.user });

export default connect(selector)(LoginForm);
