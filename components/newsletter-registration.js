import { useRef } from "react";
import { Button } from "./common/Button";
import styles from "./newsletter-registration.module.css";

export const NewsletterRegistration = () => {
  const emailInputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("data: ", data));
  };

  return (
    <div className={styles.newsletter}>
      <h2 className="center">Sign up to stay updated!</h2>
      <form onSubmit={onFormSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Your email"
          aria-label="Your email"
          ref={emailInputRef}
          required
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
};
