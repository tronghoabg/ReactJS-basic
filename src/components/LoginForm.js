import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div className="loginForm">
                <h1>Sign in</h1>
                <form>
                    <div>
                        <label>Username</label>
                        <input placeholder="user"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input placeholder="********"/>
                    </div>
                    <div>
                        <button>Đăng nhập</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default LoginForm;