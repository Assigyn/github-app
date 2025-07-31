import styles from "./../assets/style/toast.module.css"

function Toast({toast}) {
    if (null === toast) {
        return null;
    }

    function closeToast(link) {
        document.getElementById('toast-message').classList.add('d-none');
    }

    return (
        <div id="toast-message" className={`${styles.toast} d-flex-column d-none`}>
            <div className="d-flex-row justify-content-between">
                <p className="toast-title text-classic m-0">{toast.title}</p>
                <button className="toast-close" onClick={(e) => {
                    e.preventDefault();
                    closeToast(e.target);
                }}>x</button>
            </div>
            <p className="toast-description text-small mb-0">{toast.text}</p>
        </div>
    )
}

export default Toast