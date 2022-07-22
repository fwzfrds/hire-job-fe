import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../assets/css/dropdownSort.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const DropdownSort = () => {
  return (
    <div className={`dropdown ${styles['dropdown-wrapper']}`}>
        <Link 
        className={`btn dropdown-toggle ${styles.toggler}`} 
        to='#' 
        role='button' 
        id='dropdownMenuLink' 
        data-bs-toggle='dropdown' 
        aria-expanded='false'
        >
            <label className={styles.label}>
                Kategori
            </label>
        </Link>

        <ul className={`dropdown-menu ${styles.menu}`} aria-labelledby='dropdownMenuLink'>
            <li><Link to='#' className={styles.options}>Sortir berdadsarkan nama</Link></li>
            <li><Link to='#' className={styles.options}>Sortir berdadsarkan Skill</Link></li>
            <li><Link to='#' className={styles.options}>Sortir berdadsarkan Lokasi</Link></li>
            <li><Link to='#' className={styles.options}>Sortir berdadsarkan freelance</Link></li>
            <li><Link to='#' className={styles.options}>Sortir berdadsarkan fulltime</Link></li>
        </ul>
    </div>
  )
}

export default DropdownSort