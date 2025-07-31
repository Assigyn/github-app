import styles from "./../assets/style/profile.module.css"
import {useEffect, useState} from "react";
import Card from "./Card";

function Profile({profile}) {
    const repoUrl = profile.repos_url ?? null;
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        if (!repoUrl) {
            setRepos([]);
            return;
        }

        fetch(repoUrl)
            .then((response) => {
                if (200 === response.status) {
                    return response.json();
                }
            }).then((json) => {
                setRepos(json);
        })
    }, [profile]);

    return (
        <div className={styles.appProfile}>
            <h1 className="text-large">GitHub</h1>
            <h2 className="text-title mb-0">How people build software.</h2>

            <div className={styles.appProfileRepo}>
                {repos.map((repo, index) => {
                    if (repo.private) {
                        return null;
                    }

                    return <Card key={index} repository={repo} />
                })}
            </div>
        </div>
    )
}

export default Profile