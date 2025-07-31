import styles from "./../assets/style/button.module.css"

function Button({button, profile}) {
    return (
        <div className={`${styles.appButton} d-flex-row justify-content-between`}>
            <span>{button.text}</span>
            <span className={styles.appButtonNb}>{profile[button.id] ?? 'Unknown'}</span>
        </div>
    )
}

export default Button