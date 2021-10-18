import React, { useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
    const { signInUsingGoogle, handleInput, registerUser, logInUser, error } = useFirebase();

    const [isLogin, setIsLogin] = useState('');

    const toggleLogin = (e) => {
        console.log(e.target.checked);
        setIsLogin(e.target.checked);
    };

    return (
        <div className="pt-32 justify-right">
            <h1>{isLogin ? "Login" : "Register"}</h1>
            <div className="w-content m-auto  flex-column">
                <form onSubmit={isLogin ? logInUser : registerUser}>
                    {!isLogin && <p><span>Name </span><input onBlur={handleInput} className="border border-gray-600 px-2" type="text" name="name" placeholder="name" /></p>}
                    <br />
                    <p>
                        <span>Email </span> <input className="border border-gray-600 px-2" type="text" name="email" placeholder="email" onBlur={handleInput} />
                    </p>

                    <br />
                    <p>
                        <span>Password </span> <input className="border border-gray-600 px-2" type="password" name="password" placeholder="password" onBlur={handleInput} />
                    </p>

                    <br />


                    <label htmlFor="checkbox">
                        <input onChange={toggleLogin} type="checkbox" className="border-2 m-2" id="checkbox" />
                        Already Resgistered ?
                    </label>
                    <br />
                    <button className="px-2 py-1 bg-gray-500 text-white rounded " type="submit" >{isLogin ? "Login" : "Register"}</button>
                    <p className="bg-yellow-300 max-w-4xl m-auto mt-2">{error}</p>
                </form>
                <br />
                <h1>or</h1>
                <h1>Login with - </h1>
                <button className="px-2 bg-red-500 rounded mr-3 text-white" onClick={signInUsingGoogle}>Google</button>
                <button className="px-2 bg-blue-600 rounded mr-3 text-white">Facebook</button>
            </div>



        </div>
    );
};

export default Register;