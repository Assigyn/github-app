import styles from "./../assets/style/profile.module.css"
import {useEffect, useState} from "react";
import Card from "./Card";

function Profile({profile}) {
    const repoUrl = profile.repos_url ?? null;
    const [repos, setRepos] = useState([
        {name: '...', description: '...'},
        {name: '...', description: '...'}
    ]);

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

    const profileUrl = `${profile.html_url}?tab=repositories`

    return (
        <div className={styles.appProfile}>
            <h1 className="text-large">{profile.login ?? '...'}</h1>
            {profile.bio ? <h2 className="text-title mb-0">{profile.bio}.</h2> : null}

            <div className={styles.appProfileRepo}>
            {repos.slice(0, 6).map((repo, index) => {
                    if (repo.private) {
                        return null;
                    }

                    return <Card key={index} repository={repo} />
                })}
            </div>

            {repos.length > 0 ? <div className={styles.appViewMore}><a href={profileUrl} target="_blank">View all repositories</a></div> : null}
        </div>
    )
}

export default Profile