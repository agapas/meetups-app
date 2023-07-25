import styles from "./ResultMessage.module.css";

export const ResultMessage = ({
  children,
  type = "info", // "info" | "success" | "error"
  isLarge = false,
  clearFallbackFn = undefined,
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
      {children}
      {clearFallbackFn ? (
        <div
          className={styles.delete}
          onClick={clearMessage}
          title="Close message"
        >
          x
        </div>
      ) : null}
    </div>
  );
};
