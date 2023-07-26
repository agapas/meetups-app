import styles from "./ResultMessage.module.css";

export const ResultMessage = ({
  message = "Sending data...",
  type = "info", // "info" | "success" | "error"
  isLarge = false,
  clearFallbackFn,
}) => {
  const clearMessage = () => {
    if (clearFallbackFn) {
      clearFallbackFn();
    }
  };

  const typeClass = styles[type];
  const sizeClass = `${isLarge ? styles.large : ""}`;
  const xClass = `${clearFallbackFn ? styles.clearable : ""}`;

  return (
    <div
      className={`${styles.message} ${typeClass} ${sizeClass} ${xClass}`}
      title={type === "error" ? "Error message" : "Result message"}
    >
      {message}
      {clearFallbackFn ? (
        <div
          className={styles.delete}
          onClick={clearMessage}
          title="Close the message"
        >
          x
        </div>
      ) : null}
    </div>
  );
};
