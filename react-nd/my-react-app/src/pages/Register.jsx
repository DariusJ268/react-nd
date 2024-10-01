import Input from "@/components/common/Input";
import styles from "./Register.module.scss";
import Button from "@/components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/router/consts";
import { useContext, useState } from "react";
import { usedContext } from "@/hooks/usedContext";

const Register = () => {
  const { register } = useContext(usedContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword){
        register({ email, password });
    navigate(ROUTES.HOME);
    } else {
        console.error("Passwords do not match");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className={styles.input}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className={styles.input}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
          className={styles.input}
        />
        {!passwordsMatch && (
          <p className={styles.error}>Passwords do not match</p>
        )}
        <div className={styles.buttonContainer}>
        <Button type="submit" disabled={!passwordsMatch}>Register</Button>
        </div>
        <div className={styles.link}>
          <Link to={ROUTES.LOGIN} className={styles.signUp}>
            Already have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;