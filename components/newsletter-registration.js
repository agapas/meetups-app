import { Button } from "./common/Button";
import styles from "./newsletter-registration.module.css";

export const NewsletterRegistration = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();

    console.log("Registered");
    // TODO: finish the logic
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
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};
