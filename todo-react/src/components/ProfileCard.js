import styles from './ProfileCard.module.css'
function ProfileCard() {
    return (
        <div className={styles.card}>
            <img src="https://source.unsplash.com/600x600/?boy" className={styles.cardImg} />
            <h3>Arpit Khare</h3>
            <p>YouTuber | Building MarkitUp | BITS Goa | Helping Brands Grow on YouTube
                Talks about #coding, #college, #youtube, #contentcreator, and #contentmarketing</p>
            <button className={styles.btn}>Follow Now</button>
        </div>
    )
}
export default ProfileCard;