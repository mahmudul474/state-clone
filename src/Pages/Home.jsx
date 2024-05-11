import React, { useState } from "react";
function Home() {
    const [show, setShow] = useState(false);
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
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-left text-sm font-bold uppercase text-black">
                Passport Number
              </label>
              <div className="mt-2">
                <input
                  id="passport "
                  name="passport"
                  type="text"
                  placeholder="A********"
                  required
                  className="block  uppercase font-bold bg-white w-full p-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-sm font-bold text-black">
                Nid  Number 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="3459232349"
                  
                  required
                  className="block font-bold bg-white w-full p-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-sm   font-bold uppercase text-black">
                Your Name  
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Jone Doe"
                  
                  required
                  className="block font-bold bg-white w-full rounded-md border-0 py-1.5 text-black shadow-sm p-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          </form>

          <p className=" text-center text-sm text-gray-500">
            {/* Not a member?{' '} */}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              {/* Start a 14 day free trial */}
            </a>
          </p>
        </div>
      </div>
           
        </div>

    );
}

export default Home;

