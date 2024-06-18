import axios from 'axios';
import { message } from 'antd';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
// import api from '../connection.jsx';

const userSignup = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const registerUser = async (values) => {
    if (values.password !== values.passwordConfirm) {
      return setError('Passwords are not the same');
    }

    try {
      setError(null);
      setLoading(true);

      // Log the values being sent to the API
      // console.log("Sending values to API:", values);

      const res = await axios.post('https://school-inventory-management-system-9ru6.vercel.app/api/auth/signup', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Log the response received from the API
      // console.log("API Response:", res.data);

      if (res.status === 201) {
          message.success({
            content:res.data.message,
            style: {
                // marginTop: '20vh',
                marginLeft:"84vw"
              }
        })
        login(res.data.token, res.data.user);
      } else if (res.status === 400) {
        setError(res.data.message);
      } else {
        message.error("Registration Failed");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        message.error(error.toString());
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, registerUser };
};

export default userSignup;
