import styles from "./SearchBar.module.css";

function SearchBar({ value, onChange }) {

    return (

        <div className={styles.search}>

            <input
                type="text"
                placeholder="Buscar expositor..."
                value={value}
                onChange={(e)=>onChange(e.target.value)}
            />

        </div>

    );

}

export default SearchBar;