import styles from "./page.module.scss";
import Button from "../_components/Button/Button"
export default function Home() {
  return (
        <Button route="/about" color="dark" text="button" width={100}>
        </Button>
  );
}
