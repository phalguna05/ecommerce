import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {login} from '../Actions/actions';
import {useDispatch} from 'react-redux';
import './Login.css';
import Navbar from './NavBar';
import axios from 'axios';
const Login = () => {
	const [user, setUser] = useState({ Username: "",Email:"", Password: "" });
	const [signup,setSignup]=useState(true);
	const dispatch=useDispatch();
	const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
	const history = useHistory();
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUser({ ...user, [name]: value });
	};
	const handleSign = (e) => {
		setSignup(false);
	};
	const handleSignUP=(e)=>{
		var error=0;
				if(user.Username.length<8)
				{
					alert("username must be atleast 8 characters.");
					setUser({ ...user, Username: "" });
					error=1;
				}
				if(!validEmailRegex.test(user.Email))
				{
					alert("Please enter correct email address.");
					setUser({ ...user, Email: "" });
					error=1;
				}
				if(user.Password.length<8)
				{
					alert("Password must be atleast 8 characters.");
					setUser({ ...user, Password: "" });
					error=1;
				}

		if(error==0)
		{
		axios({
			method:'post',
			url:'http://localhost/ecommerce-backend/insert.php',
			data:user,
			headers:{'content-type':'application/json'}
		})
		.then(function(response){
			console.log(response);
		})
		.catch(function(response){
			console.log(response);
		});
		setSignup(true);
	}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method:'post',
			url:'http://localhost/ecommerce-backend/login.php',
			data:user,
			headers:{'content-type':'application/json'}
		})
		.then(function(response){
			if(response.data=="true"){
				localStorage.setItem("user",user.Username);
				dispatch(login());
				history.push('/Cart');
			}
			else{
				alert("Invalid Credentials");
				setUser({Username:"",Email:"",Password:""});
			}
		})
		.catch(function(response){
			console.log(response);
		});
		
	
	};
	return (
		<>
		<Navbar/>
		{signup?
			<div className="container">
				<h3 className="heading">Login</h3>
					<input
						type="text"
						className="login_info"
						id="username"
						name="Username"
						placeholder="Username"
						value={user.Username}
						onChange={handleChange}
					/><br></br>
					<input
						type="password"
						class="login_info"
						id="password"
						name="Password"
						placeholder="Password"
						value={user.Password}
						onChange={handleChange}
					/><br></br>
				<button
					type="button"
					className="login"
					onClick={handleSubmit}
				>
					Login
				</button><br></br>
				<button
					type="button"
					className="login"
					onClick={handleSign}
				>Sign Up</button>
			
			</div>
			:
			<div className="container">
				<h3 className="heading">SignUp</h3>
					<input
						type="text"
						class="sign_up"
						id="username"
						name="Username"
						placeholder="Username"
						value={user.Username}
						onChange={handleChange}
					/><br></br>
			
					<input
						type="text"
						class="sign_up"
						id="email"
						name="Email"
						placeholder="Email"
						value={user.Email}
						onChange={handleChange}
					/><br></br>
					<input
						type="password"
						class="sign_up"
						id="password"
						name="Password"
						placeholder="Password"
						value={user.Password}
						onChange={handleChange}
					/><br></br>
				
				<button
					type="button"
					className="login"
					onClick={handleSignUP}
				>
					Sign Up
				</button>

			</div>
		}
		</>
	);
};
export default Login;
