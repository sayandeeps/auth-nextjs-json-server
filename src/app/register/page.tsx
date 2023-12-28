// pages/Register.tsx
'use client'

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [kycdone, setKyc] = useState('no');
  const [aadharNumber, setAadharNumber] = useState('');
  const [password, setPassword] = useState(''); // Add password state if required
  const [unqno, setUnqno] = useState('1111'); // Add unqno state if required
  const [aadhar, setAadhar] = useState(''); // Add aadhar state if required
  const [pan, setPan] = useState(''); // Add pan state if required
  const [email, setEmail] = useState('');



  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const newUser = {
        name,
        age: parseInt(age), 
        address,
        gender,
        occupation,
        kycdone,
        aadharNumber,
        password, 
        unqno, 
        aadhar, 
        pan, 
        email

       
      };
      


      // Post new user data to the JSON server
      const response = await axios.post('https://test-json-t6ov.onrender.com/users', newUser);
      alert("registration done")
      //console.log(response);
      const uid = response.data.id;
      const investments1 = {
        cid:uid,
        fundname: "UTI Small Cap",
        amt: 1200
 

       
      };
      const investments2 = {
        cid:uid,
        fundname: "HDFC Mid-Cap Opportunities",
        amt: 10000
 

       
      };

      const response1 = await axios.post('https://test-json-t6ov.onrender.com/investments', investments1);
      console.log('Response 1:', response1.data);
  
      const response2 = await axios.post('https://test-json-t6ov.onrender.com/investments', investments2);
      console.log('Response 2:', response2.data);
  

      // Redirect to a different page after successful registration
      router.push('/login'); // Replace '/success' with your route
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error state or display error message to the user
    }
  };

  // ... (Previous code remains the same)

return (
  <>



    
    <div  className="h-screen md:flex">
	<div
		 className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div>
			<h1  className="text-white font-bold text-4xl font-sans">GoFinance</h1>
			<p  className="text-white mt-1">The most popular peer to peer lending at SEA</p>
			<button type="submit"  className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
		</div>
		<div  className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div  className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div  className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div  className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div  className="flex md:w-1/2 justify-center py-10 items-center bg-white">
  <form onSubmit={handleSubmit}  className="bg-white grid grid-cols-1 sm:grid-cols-2 gap-4">
			<h1  className="text-gray-800 font-bold text-2xl mb-1">Welcome !</h1>
			
     
			<div  className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input  className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" value={name}
            onChange={(e) => setName(e.target.value)} />
      </div>
      <div  className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input  className="pl-2 outline-none border-none"  name="" id="" placeholder="Age"  type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)} />
      </div>
      <div  className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input  className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Address" value={address}
            onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div  className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input  className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Gender" value={gender}
            onChange={(e) => setGender(e.target.value)} />
      </div>
      <div  className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input  className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Occupation" value={occupation}
            onChange={(e) => setOccupation(e.target.value)} />
      </div>
      <div  className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input  className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Aadhar Number" value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}/>
      </div>
      <div  className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input  className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Pan Number" value={pan}
            onChange={(e) => setPan(e.target.value)} />
      </div>
				
					<div  className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input  className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" value={email}
            onChange={(e) => setEmail(e.target.value)} />
      </div>
						<div  className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input  className="pl-2 outline-none border-none"  name="" id="" placeholder="Password" type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
      </div>
							<button type="submit"  className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>
		</form>
	</div>
</div>
    </>
  );
  
};

export default Register;
