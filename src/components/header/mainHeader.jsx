import classes from './page.module.css';
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <h1>Terragon</h1>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/gallery'>Gallery</Link>
          </li>
          <li>
            <Link href='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
