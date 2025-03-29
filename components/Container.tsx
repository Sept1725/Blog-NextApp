import type { ReactNode } from "react";
import styles from "styles/Container.module.css";

type ContainerProps = {
  children: ReactNode;
  large?: boolean;
};
export default function Container({ children, large = false }: ContainerProps) {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
}
