import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <h1>Sign in</h1>
                <form>
                    Username:
                    <input/>
                    Password:
                    <input/>
                    <button>Đăng nhập</button>
                </form>
            </div>
        )
    }
}
export default LoginForm;