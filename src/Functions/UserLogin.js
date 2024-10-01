import axios from "axios";

export const createUserLogin = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/create/UserMasterDetails`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res; // Return the data from the response
  } catch (error) {
    console.error("Error during user login creation:", error);
    throw error; // Optionally rethrow the error if you want to handle it elsewhere
  }
};


export const varifyUser = async (Email) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/auth/get/UserMasterDetails/${Email}`
     
    );
    return res; // Returning the full Axios response
  } catch (error) {
    console.error("Error during user verification:", error);
  }
};
