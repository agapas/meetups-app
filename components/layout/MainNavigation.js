import Link from "next/link";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>XYZ Meetups</div>
      <nav>
        <ul>
          <li key="home">
            <Link href="/">All Meetups</Link>
          </li>
          <li key="new">
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
