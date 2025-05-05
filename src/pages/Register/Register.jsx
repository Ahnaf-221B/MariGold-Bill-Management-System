import React from "react";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
	const [success, setsuccess] = useState(false)
	const [errormsg, seterrormsg] = useState("");
	const [showpass, setshowpass] = useState(false);
	

	const handleRegister = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const photo = e.target.photo.value;
		const email = e.target.email.value;
        const pass = e.target.password.value;
		const terms = e.target.terms.checked;
		console.log(email, pass, terms);

       
	};


	return (
		<div className="flex flex-col items-center justify-center pt-20 ">
			
			<form
				action=""
				className="flex flex-col gap-2 border-2 p-10  rounded-lg shadow-md"
				onSubmit={handleRegister}
			>
                  <legend className="fieldset-legend text-3xl">Registration</legend>
				<label className="text-xs" htmlFor="">
					Name
				</label>
				<input
					type="text"
					name="name" // Add this name attribute
					className="input "
					placeholder="Enter your name"
					required
				/>
				<label className="text-xs" htmlFor="">
					Photo
				</label>
				<input
					type="text"
					name="photo" // Add this name attribute
					className="input "
					placeholder="photo url"
					required
				/>
                <label className="label">Email</label>
        <input
            // ref={emailref}
            type="email"
            name="email"
            required
            className="input"
            placeholder="Email"
        />
				<label className="text-xs" htmlFor="">
					Password
				</label>
				<label className="input validator">
					<svg
						className="h-[1em] opacity-50"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<g
							strokeLinejoin="round"
							strokeLinecap="round"
							strokeWidth="2.5"
							fill="none"
							stroke="currentColor"
						>
							<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
							<circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
						</g>
					</svg>
					<div className="relative flex items-center justify-between">
						<input
							type={showpass ? "text" : "password"}
							name="password" // Add this name attribute
							required
							placeholder="Password"
							minlength="8"
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
						/>
						<button
							onClick={() => {
								setshowpass(!showpass);
							}}
							className="ml-5"
						>
							{showpass ? <FaEyeSlash /> : <FaEye></FaEye>}
						</button>
					</div>
				</label>
				

				<p className="validator-hint hidden">
					Must be more than 8 characters, including
					<br />
					At least one number <br />
					At least one lowercase letter <br />
					At least one uppercase letter
				</p>

				<br />

				<button className="btn btn-primary" type="submit">
					Register
				</button>
			</form>
			<p className="pt-5 pb-5">
				Already have an acccount?{" "}
				<Link to="/login" className="ml-3 text-red-700 font-semibold">
					LogIn
				</Link>
			</p>
			
		</div>
	);
};

export default Register;
