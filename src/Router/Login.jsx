import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

const Login = () => {

     const navigate = useNavigate()
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")

     const login = async (auth, email, password) => {
      
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              navigate('/Homepage') 
          })
          .catch((error) => {
              console.log(error.message)
          })
  }

    const handleSubmit = async (e) => {
        e.preventDefault()
        login(auth, email, password)   
    }
 
    return ( <div className="flex items-center justify-center min-h-screen bg-indigo-50">
        <div className="w-fullpx-6">
            <div className='flex justify-center items-center mb-5'>
            <div className="text-5xl font-bold font-serif text-indigo-500  drop-shadow-md">
      <div
      className="cursor-pointer"
     
      >
      Album Adventures
      </div>
      
      </div> 
        </div>
          <div className="overflow-hidden bg-white rounded-2xl shadow-xl">
            <div className="bg-indigo-600 py-6 px-8">
              <h2 className="text-center text-2xl font-bold font-serif drop-shadow-lg text-white mb-1">Login</h2>
            </div>
            
            <div className="px-8 py-6">
              <div onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="block text-gray-700 text-sm font-bold font-serif  font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="pl-10 w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="you@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold font-serif  text-sm font-medium mb-2" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    
                    </div>
                    <input
                      type="password"
                      id="password"
                      className="pl-10 w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="••••••••"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center  bg-indigo-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                   
                >
                  <span className="font-bold font-serif">Log In</span>
                 
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 text-gray-600 font-bold font-serif ">
            Don't have an account?{" "}
            <Link className="font-medium text-blue-600 hover:text-blue-800 transition-colors font-bold font-serif"
            to={"/"}
            >
            Signup
            </Link>
          </div>
        </div>
      
    </div>)
}

export default Login