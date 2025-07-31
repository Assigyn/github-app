import styles from "./../assets/style/header.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
import SearchResult from "./SearchResult";

function Header({setUserName}) {
    const [search, setSearch] = useState(null)
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        if ('' !== search && null !== search) {
            axios.get(`https://api.github.com/search/users?q=${search}&per_page=10`)
                .then((response) => {
                    setSearchResults(response.data.items)
                })
        }
    }, [search]);

    function getSearchResults() {
        return searchResults.map((result, key) => {return <SearchResult key={key} result={result} setUserName={setUserName} setSearchResults={setSearchResults}/>});
    }

    return (
        <header>
            <input id="search-input" className={styles.searchInput} placeholder="username" type="text" onBlur={(e) => {setSearch(e.target.value);}}/>
            {searchResults.length > 0 ? <div className={styles.searchResultsList}>{getSearchResults()}</div> : null}
        </header>
    )
}

export default Header