import React from 'react'
import DropdownSort from '../base/dropdownSort'
import Input from '../base/input'
import Button from '../base/button'

import styles from '../../assets/css/searchbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import searchImg from './search.png'

const Searchbar = () => {
  return (
    <div 
    className='container' 
    style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: 'none',
        borderRadius: '10px',
        marginTop: '50px',
        padding: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        }}>
        <Input 
        type='text'
        className={styles.search}
        placeholder='Search for any skill'
        onChange=''
        />
        <div className={styles.searchImg}>
            <img src={searchImg} alt='search'/>
        </div>
        <div className={styles.vl}></div>
        <DropdownSort />
        <Button
        type='submit'
        className={styles['search-button']}
        onClick=''
        value=''
        title='Search'
        />
    </div>
  )
}

export default Searchbar