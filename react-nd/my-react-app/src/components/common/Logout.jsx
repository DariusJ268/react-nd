import React, { useContext } from "react";
import { usedContext } from "@/hooks/usedContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/router/consts";
import styles from "./Button.module.scss";

const Logout = ({ className = '', ...props }) => {
  const { logout } = useContext(usedContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME);
  };

  return (
    <button onClick={handleLogout}
      className={`${styles.button} ${className}`}
      {...props}>
      Log out
    </button>
  );
};

export default Logout;