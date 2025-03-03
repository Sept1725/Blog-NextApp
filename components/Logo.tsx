import Link from "next/link";
import styles from "styles/Logo.module.css";

type LogoProps = {
  boxOn?: boolean;
};

export default function Logo({ boxOn = false }: LogoProps) {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      CUBE
    </Link>
  );
}
