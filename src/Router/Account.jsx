import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { User, Mail, Calendar } from "lucide-react";
import { Button } from "react-bootstrap";
import AccountBanner  from "../Components/AccountBanner"
import Header from "../Components/Header";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../firebase"

const Account = () => {

  const user_info = useContext(AuthContext);
  const userData = user_info?.userData || {};
  const created = userData.created ? userData.created.slice(0, 10) : "Unknown";

  const location = useLocation();
  const currentSearch = location.state?.searchInput;

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) => console.log("Error signing out:", error));
  };

  return (
    <div className="min-h-screen bg-indigo-50">
      <Header currentSearch={currentSearch} />

      <div className="flex justify-center items-center mt-5">
        <AccountBanner/>
      </div>

      <div className="flex flex-col items-center mt-10 space-y-4">
        <div className="bg-indigo/80 border-3 border-indigo-500 shadow-lg rounded-2xl px-6 py-4 w-[600px] text-left">
          <div className="flex items-center space-x-3">
            <User className="text-indigo-600" />
            <p className="text-xl font-bold font-serif text-indigo-700">
              Username:
            </p>
          </div>
          <p className="ml-8 mt-2 font-semibold font-serif text-indigo-600">
            {user_info.userData.username}
          </p>
        </div>

        <div className="bg-indigo/80 border-3 border-indigo-500 shadow-lg rounded-2xl px-6 py-4 w-[600px] text-left">
          <div className="flex items-center space-x-3">
            <Mail className="text-indigo-600" />
            <p className="text-xl font-bold font-serif text-indigo-700">
              Email:
            </p>
          </div>
          <p className="ml-8 mt-2 font-semibold font-serif text-indigo-600">
            {user_info.userData.email}
          </p>
        </div>

        {/* Date Created Card */}
        <div className="bg-indigo/80 border-2 border-indigo-500 shadow-lg rounded-2xl px-6 py-4 w-[600px] text-left">
          <div className="flex items-center space-x-3">
            <Calendar className="text-indigo-600" />
            <p className="text-xl font-bold font-serif text-indigo-700">
              Account Created:
            </p>
          </div>
          <p className="ml-8 mt-2 font-semibold font-serif text-indigo-600">
            {created}
          </p>
        </div>

        <Button
          variant="danger"
          size="lg"
          className="mt-6"
          onClick={handleSignOut}
        >
          <span className="font-serif font-bold">Sign Out</span>
        </Button>
      </div>
    </div>
  );
};

export default Account;


