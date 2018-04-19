import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';

class LoginForm extends React.Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    // this is in abstract form in order to avoid using two functions: onChangeEmail, onChangePassword 
    onChange = e => this.setState({ 
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
    }

    // TO DO: show errors if any
    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if ((!data.password) || (data.password.length < 8))
            errors.password = "Password must be at least 8 characters long";
        return errors;
    }

    render() {
        const { data } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="youremail@here.com"
                        value={data.email}
                        onChange={this.onChange}
                    />   
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="your password here"
                        value={data.password}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        )
    }
}

export default LoginForm;