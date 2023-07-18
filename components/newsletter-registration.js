import { useRef } from "react";
import { Button } from "./common/Button";
import styles from "./newsletter-registration.module.css";

export const NewsletterRegistration = () => {
  const emailInputRef = useRef(null);

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;

    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();

    emailInputRef.current.value = "";
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
