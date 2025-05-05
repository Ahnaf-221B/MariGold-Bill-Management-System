import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const pass = e.target.password.value;
		console.log(email, pass);

		// signInUser(email,pass) .then(result =>{
		// 	console.log(result);

			
		// }).catch(error =>{
		// 	console.log(error);
			
		// })
	};


  return (
    <div className="flex flex-col items-center justify-center pt-20 mb-12">
    <form
        onSubmit={handleLogin}
        className="mx-auto  fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
    >
        <legend className="fieldset-legend text-3xl">Login</legend>

        <label className="label">Email</label>
        <input
            // ref={emailref}
            type="email"
            name="email"
            required
            className="input"
            placeholder="Email"
        />

        <label className="label">Password</label>
        <input
            type="password"
            className="input"
            name="password" // Add this name attribute
            required
            placeholder="Password"
            minLength={8}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
        <div>
            <a className="link link-hover" href="">
                Forget password?
            </a>
        </div>

        <button className="btn btn-neutral mt-4">Login</button>
    </form>
    <p className='mt-2'>
        New to website??{" "}
        <Link to="/register" className="text-red-700">
            Register
        </Link>
    </p>
    {/* {errormsg && <p className="text-red-500 text-center mt-2">{errormsg}</p>}

    {success && (
        <p className="text-green-500 text-center mt-2">
            You have login successfully
        </p>
    )} */}
</div>
  )
}

export default Login