import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const homePath = "/";
  const newMeetupPath = "/new-meetup";

  const { pathname, isReady } = useRouter();
  const [selected, setSelected] = useState(homePath);

  useEffect(() => {
    if (isReady) {
      setSelected(pathname);
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>XYZ Meetups</div>
      <nav>
        <ul>
          <li key="home">
            <Link
              href={homePath}
              className={homePath === selected ? "selected" : ""}
            >
              All Meetups
            </Link>
          </li>
          <li key="new">
            <Link
              href={newMeetupPath}
              className={newMeetupPath === selected ? "selected" : ""}
            >
              Add New Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
