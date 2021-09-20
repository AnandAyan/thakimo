import Link from 'next/link'
import styles from '../styles/components/menu.module.scss'

export default function Menu() {
  return (
          <ul className={styles.navbarNav}  id="navbarNav">
          <li className="nav-item active">
          <Link href="/">
            <a className="nav-link">User guide  </a>
            </Link>
          </li>
          <li className="nav-item">
          <Link href="/company-details">
            <a className="nav-link" >Register</a>
             </Link>
          </li>
          <li className="nav-item">
          <Link href="/">
            <a className="nav-link" >Login</a>
            </Link>

          </li>
          <li className="nav-item">
          <Link href="/">
            <a className="nav-link " >Tokhimo</a>
            </Link>
          </li>
        </ul>
      )
}
