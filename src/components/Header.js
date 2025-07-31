import styles from "./../assets/style/header.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
import SearchResult from "./SearchResult";

function Header({setUserName}) {
    const [search, setSearch] = useState(null)
    const [searchResults, setSearchResults] = useState([])

    function generateSearchResultsList() {
        return searchResults.map((result, key) => {return <SearchResult key={key} result={result} setUserName={setUserName} setSearchResults={setSearchResults}/>});
    }

    useEffect(() => {
        if ('' !== search && null !== search) {
            axios.get(`https://api.github.com/search/users?q=${search}&per_page=6`)
                .then((response) => {
                    setSearchResults(response.data.items)
                    setSearch(null);
                })
        }
    }, [search]);

    function closeMenu(target) {
        let menu = document.getElementById('profile-select');

        if (menu) {
            if (menu.contains(target)) {
                return;
            }

            setSearch(null)
            setSearchResults([])
        }
    }

    return (
        <header>
            <input id="search-input" className={styles.searchInput} placeholder="username" type="text" onBlur={(e) => closeMenu(e.relatedTarget)} onKeyDown={(e) => {
                if ('Enter' === e.key) {
                    setSearch(e.target.value);
                }
            }}/>
            {searchResults.length > 0 ? <div id="profile-select" onBlur={(e) => closeMenu(e.relatedTarget)} className={styles.searchResultsList}>{generateSearchResultsList()}</div> : null}
        </header>
    )
}

export default Header