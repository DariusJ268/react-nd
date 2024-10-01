import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../../router/consts";
import Button from "../common/Button";
import styles from "./Topbar.module.scss";
import { LuBoxes } from "react-icons/lu";
import { useContext } from "react";
import { usedContext } from "@/hooks/usedContext";
import Loged from "../common/Loged";
import Logout from "../common/Logout";

const Topbar = () => {
  const { user } = useContext(usedContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME);
  };

  const links = [
    {
      href: ROUTES.HOME,
      label: "Home",
    },
    {
      href: ROUTES.SERVICES,
      label: "Services",
    },
    {
      href: ROUTES.ABOUT_US,
      label: "About Us",
    },
  ];
  return (
    <header className={styles.topbar}>
      <div className={styles.leftSide}>
        <Link to={ROUTES.HOME}>
          < LuBoxes fontSize={50} />
          <span style={{ marginLeft: "10px", fontSize: "20px" }}>Logoipsum Home Services</span>
        </Link>
        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link key={link.label} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.rightSide}>
        {user ? (
          <div className={styles.userSection}>
            <Loged>{user.email[0]}</Loged>
            <Logout className={styles.logout}>
              Log Out
            </Logout>
          </div>
        ) : (
          <Button onClick={() => navigate(ROUTES.LOGIN)}>Login / Sign Up</Button>
        )}
      </div>
    </header>
  );
};

export default Topbar;
