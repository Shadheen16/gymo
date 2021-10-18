import React from 'react';

const Login = () => {
    return (
        <div className="pt-10">
            <h1>Login</h1>
            <form onSubmit="logInUser">
                <input className="border border-gray-600 px-2" type="email" placeholder="email" />
                <br />
                <br />
                <input className="border border-gray-600 px-2" type="password" placeholder="password" />
                <br />
                <br />
                <input className="px-2 py-1 bg-gray-500 text-white rounded " type="submit" />
            </form>

        </div>
    );
};

export default Login;