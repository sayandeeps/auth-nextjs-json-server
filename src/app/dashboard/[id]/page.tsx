'use client'


import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './components/sidebar';
import Navbar from './components/nav';
import Stats from './components/stats';
import Statsdown from './components/statsdown';




interface pageprops{
    params: {id:any}
}


const page: FC<pageprops> = ({params}) => {
    const [userData, setUserData] = useState<any>({});
    const [userInvestment, setUserInvestment] = useState<any>({});



    useEffect(() => {
        // Fetch user data based on the ID from the API
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://test-json-t6ov.onrender.com/users/${params.id}`);
            const responseinvest = await axios.get(`https://test-json-t6ov.onrender.com/investments/?cid=${params.id}`);
            // Assuming your API returns data in the format like your example user object
            setUserData(response.data);
            setUserInvestment(responseinvest.data);
            
          } catch (error) {
            console.error('Error fetching user data:', error);
            // Handle errors here
          }
        };
    
        fetchData(); // Call the fetchData function when the component mounts or the ID changes
      }, [params.id]);


      const [showModal, setShowModal] = useState(false);
  const [newKycValue, setNewKycValue] = useState('');

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    // Reset the input field when closing the modal
    setNewKycValue('');
  };

  const handleKycUpdate = async () => {
    console.log(newKycValue)
    console.log(userData.unqno)
   if(newKycValue === userData.unqno){
    try {
        // Assuming newKycValue is set elsewhere in your code
        const newKycValue = 'yes'; // Replace with the actual value
    
        // Make a PATCH request to update kycdone
        const response = await axios.patch(`https://test-json-t6ov.onrender.com/users/${params.id}`, { kycdone: newKycValue });
    
        if (response.status === 200) {
          // Successful update
          console.log('KYC value updated:', newKycValue);
          alert('Response recorded');
          handleModalClose();
          window.location.reload();
        } else {
          // Handle unsuccessful update
          alert('Update failed');
        }
      } catch (error) {
        console.error('Error updating KYC:', error);
        // Handle error cases
      }
   }else{
    alert("invalid otp")
   }
    handleModalClose();
  };

      
    //   console.log(userData);
      // console.log(params.id);
       //console.log(userInvestment);

  return (
    // <div>page {params.id}</div>
    <>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1  overflow-x-hidden">
      <Navbar />
   <div className="flex bg-gray-200 items-start h-between  w-100 justify-start">

<div className="w-full">
    <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2" style={{ backgroundImage: "url('/Iphone-Background-Aesthetic-City-Night-1-768x1152.jpg')" }}>
            <img className="w-32 h-32 rounded-full mx-auto" src="/dp.png" alt="John Doe"/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{userData.name}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{userData.occupation}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-5 pl-5">
     
      <div className="col-span-1">
        <p className="text-gray-500 font-semibold">Age:</p>
        <p>{userData.age}</p>
      </div>
      <div className="col-span-1">
        <p className="text-gray-500 font-semibold">Address:</p>
        <p>{userData.address}</p>
      </div>
      <div className="col-span-1">
        <p className="text-gray-500 font-semibold">Gender:</p>
        <p>{userData.gender}</p>
      </div>
      {/* <div className="col-span-1">
        <p className="text-gray-500 font-semibold">Occupation:</p>
        <p>{userData.occupation}</p>
      </div> */}
       <div className="col-span-1">
      <p className="text-gray-500 font-semibold flex">KYC Done:</p>
      {userData.kycdone === 'no' && (
        <div className=''>
          {/* Info Icon */}
          <button onClick={handleModalOpen} className="focus:outline-none hover:bg-red-200">
            KYC Not done click here to Complete your kyc
          </button>
          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="relative w-auto max-w-3xl mx-auto my-6">
                <div className="modal-container bg-white w-full mx-auto rounded shadow-lg z-50 overflow-y-auto">
                  <div className="relative flex flex-col p-8">
                    <h1 className="text-lg font-bold">Update KYC Status</h1>
                    <input
                      type="text"
                      value={newKycValue}
                      onChange={(e) => setNewKycValue(e.target.value)}
                      placeholder="Enter new value"
                      className="border rounded-md p-2 mt-2"
                    />
                    <button onClick={handleKycUpdate} className="btn mt-4">
                      Update
                    </button>
                    <button
                      onClick={handleModalClose}
                      className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <p>{userData.kycdone === 'yes' ? "Your KYC is Done" :"" }</p>
    </div>
      <div className="col-span-2">
        <p className="text-gray-500 font-semibold">Aadhar Number:</p>
        <p>{userData.aadharNumber}</p>
      </div>
      {/* <div className="col-span-2">
        <p className="text-gray-500 font-semibold">Password:</p>
        <p>{userData.password}</p>
      </div> */}
      {/* <div className="col-span-2">
        <p className="text-gray-500 font-semibold">Unique Number:</p>
        <p>{userData.unqno}</p>
      </div> */}
      {/* <div className="col-span-2">
        <p className="text-gray-500 font-semibold">Aadhar:</p>
        <p>{userData.aadhar}</p>
      </div> */}
      <div className="col-span-2">
        <p className="text-gray-500 font-semibold">PAN:</p>
        <p>{userData.pan}</p>
      </div>
      <div className="col-span-2">
        <p className="text-gray-500 font-semibold">Email:</p>
        <p>{userData.email}</p>
      </div>
    </div>


            

        </div>
    </div>
</div>

</div>

<div className="grid bg-gray-200 lg:grid-cols-3 md:grid-cols-2 pt-5 gap-6 w-100 px-10 pb-5">
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Current Portfolio</h1>

		
{Array.isArray(userInvestment) && userInvestment.length > 0 ? (
  userInvestment.map((investment: any, index: number) => (
    <React.Fragment key={index}>
      {investment.amt > 5000 ? (
        <Stats
          key={index}
          fundname={investment.fundname}
          amt={investment.amt}
          
        />
      ) : (
        <Statsdown
          key={index}
          fundname={investment.fundname}
          amt={investment.amt}
         
        />
      )}
    </React.Fragment>
  ))
) : (
  <p>No investments available</p>
)}
	
		
		
	</div>
</div>
</div>
    </>
  )
}

export default page