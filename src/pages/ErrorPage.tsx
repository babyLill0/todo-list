import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ErrorPage: FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    }

  }, [navigate]);

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Redirecting to Home...</p>
    </div>
  );
};

export default ErrorPage;
