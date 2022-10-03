import React from 'react';
import { useState } from 'react';
import styles from '../../../styles/Home.module.css';

const SearchBar = ({
    onSearch,
}) => {
    const [input, setInput] = useState("");
    const handleChange = (e) => setInput(e.target.value);
    const handleSubmit = () => onSearch(input);
    return (
        <label className={styles.searchbar}>
            <input type="text" className={styles.searchinput} onChange={handleChange}/>
            <button className={styles.searchbutton} onClick={handleSubmit}>Search</button>
        </label>
    )
}

export default SearchBar;