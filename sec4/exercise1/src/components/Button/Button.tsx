import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary";
}

function Button({ children, color }: Props) {
  return (
    <button className={[styles.btn, styles["btn-" + color]].join(" ")}>
      {children}
    </button>
  );
}

export default Button;
