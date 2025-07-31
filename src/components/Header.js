import styles from "./../assets/style/header.module.css"

function Header() {
    return (
        <header>
            <input id="search-input" className={styles.searchInput} placeholder="username" type="text"/>
        </header>
    )
}

export default Header