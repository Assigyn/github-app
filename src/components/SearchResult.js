import styles from "./../assets/style/search.result.module.css"

function SearchResult({result, setUserName, setSearchResults}) {
    return (
        <div className={`${styles.appSearchResult} `}>
            <a href="#" onClick={() => {
                setUserName(result.login);
                setSearchResults([]);
            }}>
                <div className="d-flex-row gap-1 align-items-center">
                    <img src={result.avatar_url} alt={result.login}/>
                    <span>{result.login}</span>
                </div>
            </a>
        </div>
    )
}

export default SearchResult