import styles from "./SectionContainer.module.css";

function SectionContainer({ children, className = "" }) {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}

export default SectionContainer;