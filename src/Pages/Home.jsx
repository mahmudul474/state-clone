import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Home() {
    const [show, setShow] = useState("");

  const location = useLocation();
  const navigate = useNavigate();



      const fromsubmit=(e)=>{
e.preventDefault();
 const from=e.target
  const passportnumber =from.passport.value
  const idnumber =from.nid.value
  const name= from.name.value

console.log(passportnumber, name, idnumber)
if(passportnumber=="A06722935"){
  navigate("/alamineyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
}else if(passportnumber=="EM0094466"){
     navigate("/alaleyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
}else{
setShow("invalid credentials")
}

      }



    return (
        <div className= " pb-12  overflow-y-hidden w-full"  style={{  
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
        backgroundImage: 'url(https://i.ibb.co/qjQ1qxt/28-mar-2023-blog.jpg)'}}>
       
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
          
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         <form className="space-y-6"  onSubmit={fromsubmit}>
            <div>
             
              <div className="mt-2">
                <input
                  id="passport "
                  name="passport"
                  type="text"
                  placeholder="Type your Passport Number"
                  required
                  className="block  uppercase font-bold bg-white w-full p-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              
              <div className="mt-2">
                <input
                  id="nid"
                  name="nid"
                  type="text"
                  placeholder="Type your NID card number"
                  
                  required
                  className="block font-bold uppercase bg-white w-full p-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Type your name"
                  
                  required
                  className="block font-bold uppercase bg-white w-full rounded-md border-0 py-1.5 text-black shadow-sm p-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
             Visa Check 
              </button>
            </div>
          </form> :  
         
          {
            show && <p className=" text-center text-sm text-red-500">
            {show}
             
          </p>
          }

          
        </div>
      </div>
           
        </div>

    );
}

export default Home;

