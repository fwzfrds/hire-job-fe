import React from 'react'
import styles from './Textarea.module.css'

const Textarea = ({ labelName, id, name, placeholder, onChange }) => {
    return (
        <div className={`${styles['textarea-container']}`}>
            <label htmlFor={`desc_${id}`}>{labelName}</label>
            <textarea
                name={name}
                id={`desc_${id}`}
                placeholder={placeholder} 
                cols="30" 
                rows="10"
                onChange={onChange}
            >
            </textarea>
        </div>
    )
}

export default Textarea