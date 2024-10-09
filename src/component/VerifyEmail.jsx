import React, { createContext, useContext, useState } from "react";
import axios from "axios";
const EmailContext = createContext();

export const useEmail = () => useContext(EmailContext);

const EmailProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const EmailVerify = async() => {
    const Email = localStorage.getItem("user");
    if (Email) {
        await axios.get(
            `${process.env.REACT_APP_API_URL}/api/auth/get/UserMasterDetails/${Email}`
           
          )
        .then((response) => {
          console.log(response);
          const user = response.data;
          setUserData(user);
        })
        .catch((error) => {
          console.error("Error in user verification process:", error);
        });
    } else {
      console.log("No token found");
      setUserData(null)
    }
  };

  return (
    <EmailContext.Provider value={{ EmailVerify, userData, setUserData }}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailProvider;
