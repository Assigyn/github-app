import styles from "./../assets/style/nav.module.css"
import Button from "./Button";

function Nav({profile}) {
    let buttons = [
        {id: 'followers', text: 'Followers'},
        {id: 'following', text: 'Following'},
        {id: 'location', text: 'Location'},
    ];

    return (
        <nav className={`${styles.navBtns} d-flex-row gap-3`}>
            {profile.avatar_url ? <img className={styles.navAvatar} src={profile.avatar_url} alt="user avatar"/> : null}
            <div className="d-flex-row gap-2">
                {buttons.map((button, key) => {return <Button key={key} button={button} profile={profile} />})}
            </div>
        </nav>
    )
}

export default Nav