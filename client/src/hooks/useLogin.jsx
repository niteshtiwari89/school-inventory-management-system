import { message } from "antd";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const useLogin = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch("https://school-inventory-management-system-server-tau.vercel.app/api/auth/login", {
          method:'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (res.status === 200) {
        message.success({
          content: data.message,
          style: {
            // marginTop: '20vh',
            marginLeft: "85vw",
          },
        });
        login(data.token, data.user);
      } else if (res.status === 404) {
        setError(data.message);
      } else {
        message.error("Login Failed");
      }
    } catch (error) {
      message.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;
