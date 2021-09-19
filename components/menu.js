import styles from '../styles/components/menu.module.scss'

export default function Menu() {
  return (
          <ul className={styles.navbarNav}  id="navbarNav">
          <li className="nav-item active">
            <a className="nav-link" href="#">User guide  </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Tokhimo</a>
          </li>
        </ul>
      )
}
