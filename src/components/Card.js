import styles from "./../assets/style/card.module.css"
import fork from "./../assets/img/Nesting.svg"
import star from "./../assets/img/Star.svg"
import mit from "./../assets/img/Chield_alt.svg"

import getReadableDateDiff from "../utils/DateUtils";

function Card({repository}) {
    const getDate = () => {
        const dateData = getReadableDateDiff(repository.pushed_at ?? null)

        if (null === dateData) {
            return null;
        }

        return (
            <div className="d-flex-row align-items-end gap-05">
                <span className="ml-1">
                    {dateData ? `Updated ${dateData.value} ${dateData.unit} ago` : null}
                </span>
            </div>
        )
    }

    function getMit() {
        return (
            <div className="d-flex-row align-items-end gap-05">
                <img src={mit} alt="mit"/>
                <span>MIT</span>
            </div>
        );
    }

    return (
        <div className={`${styles.appRepoCard} d-flex-column justify-content-between`}>
            <a href={repository.html_url} target="_blank">
                <div>
                <h3>{repository.name}</h3>
                    {repository.description ? <p>{repository.description}</p> : null}
                </div>

                <div className="d-flex-row gap-1 align-items-end">
                    {repository.license && repository.license.key === 'mit' ? getMit() : null}
                    <div className="d-flex-row align-items-end gap-05">
                        <img src={fork} alt="fork"/>
                        <span>{repository.forks_count ?? 0}</span>
                    </div>
                    <div className="d-flex-row align-items-end gap-05">
                        <img src={star} alt="star"/>
                        <span>{repository.stargazers_count ?? 0}</span>
                    </div>
                    {getDate()}
                </div>
            </a>
        </div>
    )
}

export default Card