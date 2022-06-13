import React from 'react'
import styles from './Textarea.module.css'

const Textarea = ({ labelName, id, placeholder }) => {
    return (
        <div className={`${styles['textarea-container']}`}>
            <label for={`desc_${id}`}>{labelName}</label>
            <textarea
                name={`desc_${id}`}
                id={`desc_${id}`}
                placeholder={placeholder} 
                cols="30" 
                rows="10"
            >
            </textarea>
        </div>
    )
}

export default Textarea