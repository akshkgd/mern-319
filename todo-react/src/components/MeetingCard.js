import styles from './MeetingCard.module.css'
function MeetingCard() {
    return (
        <div className={styles.card}>
            <img src="https://source.unsplash.com/1600x900/?salad" className={styles.cardImg} />
            <h3>Importance of Food</h3>
            <button className={styles.btn}>Join Meeting</button>
        </div>
    )
}
export default MeetingCard;