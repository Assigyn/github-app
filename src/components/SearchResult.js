import styles from "./../assets/style/search.result.module.css"

function SearchResult({result, setUserName, setSearchResults}) {
    function loadNewProfile(result) {
        setUserName(result.login);
        setSearchResults([]);
    }

    return (
        <div className={`${styles.appSearchResult} `}>
            <a href="#" onClick={() => {loadNewProfile(result)}}>
                <div className="d-flex-row gap-1 align-items-center">
                    <img src={result.avatar_url} alt={result.login}/>
                    <div className="d-flex-row align-self-center">{result.login}</div>
                </div>
            </a>
        </div>
    )
}

export default SearchResult