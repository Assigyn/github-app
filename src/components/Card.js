import styles from "./../assets/style/card.module.css"
import fork from "./../assets/img/Nesting.svg"
import star from "./../assets/img/Star.svg"

function Card({repository}) {
    return (
        <div className={`${styles.appRepoCard} d-flex-column justify-content-between`}>
            <div>
                <h3>{repository.name}</h3>
                {repository.description ? <p>{repository.description}</p> : null}
            </div>
            <div className="d-flex-row gap-1 align-items-end">
                {repository.license && repository.license.key === 'mit' ? <span>MIT</span> : null}
                <div className="d-flex-row align-items-end gap-05">
                    <img src={fork} alt="fork"/>
                    <span>{repository.forks_count ?? 0}</span>
                </div>
                <div className="d-flex-row align-items-end gap-05">
                    <img src={star} alt="star"/>
                    <span>{repository.stargazers_count ?? 0}</span>
                </div>
                <div className="d-flex-row align-items-end gap-05">
                    <span className="ml-1">{repository.pushed_at ?? 'a'}</span>
                </div>
            </div>
        </div>
    )
}

export default Card