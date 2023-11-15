import React, { useContext } from 'react'
import { VscBellDot } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";
import profileImage from "../../../assets/images/profile-image.jpg"    
import { AuthContext } from '../../../context/AuthContext';

const UserHeader = ({showDropDown, setShowDropDown}) => {
  const {  logout } = useContext(AuthContext);

    const handleLogout = () => {
        // Perform logout logic (e.g., clear local storage, call API)
        // If successful, call the logout function from the context
        logout();
      };
  return (
    <div>
        <div className="w-full py-3 px-10 bg-gray-100 mx-auto shadow-md">
            <div className="max-w-screen-2xl flex justify-end">
              <div className="flex gap-3 items-center">
                <VscBellDot className="text-2xl text-gray-600 cursor-pointer" />
                <div className="flex items-center gap-3 w-full relative cursor-pointer" onClick={() => setShowDropDown(!showDropDown)}>
                  <div className="w-10 h-10 rounded-full shadow-md">
                    <img src={profileImage} alt="" className="rounded-full w-full h-full object-cover"/>
                  </div>
                  <h2>Charles</h2>
                  <FaAngleDown />

                  {showDropDown && <div className="absolute top-12 right-0 w-40 bg-gray-200 shadow-sm p-3 rounded-md flex flex-col gap-2">
                    <h2>Profile</h2>
                    <h2>Settings</h2>
                    <h2 onClick={handleLogout}>Logout</h2>
                  </div>}
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default UserHeader