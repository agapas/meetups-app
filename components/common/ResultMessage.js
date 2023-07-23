import styles from "./ResultMessage.module.css";

export const ResultMessage = ({
  children,
  isError = false,
  isLarge = false,
  clearFallbackFn = undefined,
}) => {
  const clearMessage = () => {
    if (clearFallbackFn) {
      clearFallbackFn();
    }
  };

  const typeClass = `${isError ? styles.error : ""}`;
  const sizeClass = `${isLarge ? styles.large : ""}`;
  const xClass = `${clearFallbackFn ? styles.clearable : ""}`;

  return (
    <div
      className={`${styles.message} ${typeClass} ${sizeClass} ${xClass}`}
      title={isError ? "Error message" : "Result message"}
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
