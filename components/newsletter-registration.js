import { useRef, useState } from "react";
import { Button } from "./common/Button";
import { ResultMessage } from "./common/ResultMessage";
import styles from "./newsletter-registration.module.css";

export const NewsletterRegistration = () => {
  const emailInputRef = useRef(null);

  const [error, setError] = useState();
  const [resultInfo, setResultInfo] = useState();

  const clearResult = () => {
    if (error) setError(undefined);
    if (resultInfo) setResultInfo(undefined);
  };

  const clearEmail = () => {
    if (emailInputRef.current.value) emailInputRef.current.value = "";
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    clearResult();

    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: emailInputRef.current.value }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result.status >= 400) {
      setError(result.message);
    } else {
      setResultInfo(result.message);
    }
  };

  return (
    <div className={styles.newsletter}>
      <h2 className="center">Sign up to stay updated!</h2>
      <form onSubmit={onFormSubmit}>
        <div className={styles.email}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
            required
          />
          <Button onClick={clearEmail} title="Clear input">
            x
          </Button>
        </div>
        <Button type="submit" title="Subscribe newsletter">
          Subscribe
        </Button>
      </form>
      {error ? (
        <ResultMessage isError={true} clearFallbackFn={clearResult}>
          {error}
        </ResultMessage>
      ) : resultInfo ? (
        <ResultMessage clearFallbackFn={clearResult}>
          {resultInfo}
        </ResultMessage>
      ) : null}
    </div>
  );
};
