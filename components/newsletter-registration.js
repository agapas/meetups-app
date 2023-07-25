import { useRef, useState } from "react";
import { Button } from "./common/Button";
import { ResultMessage } from "./common/ResultMessage";
import styles from "./newsletter-registration.module.css";

export const NewsletterRegistration = () => {
  const emailInputRef = useRef(null);

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();
  const [resultMessage, setResultMessage] = useState();

  const clearResult = () => {
    if (error) setError(undefined);
    if (resultMessage) setResultMessage(undefined);
  };

  const clearEmail = () => {
    if (emailInputRef.current.value) emailInputRef.current.value = "";
    clearResult();
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    clearResult();

    setIsPending(true);

    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: emailInputRef.current.value }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    setIsPending(false);

    if (result.status >= 400) {
      setError(result.message || "Something went wrong");
    } else {
      setResultMessage(result.message || "Success!");
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
      {error || resultMessage || isPending ? (
        <ResultMessage
          type={error ? "error" : resultMessage ? "success" : "info"}
          clearFallbackFn={clearResult}
        >
          {error ?? resultMessage ?? "Subscribing..."}
        </ResultMessage>
      ) : null}
    </div>
  );
};
