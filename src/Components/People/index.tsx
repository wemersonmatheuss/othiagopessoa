import styles from "./styles.module.css"

type Props = {
    icon: string;
    description: string;
}

export function People({ icon, description }:Props) {
    return (
        <div className={styles.container}>
            <img src={icon} alt="" />
            <p>{description}</p>
        </div>
    )
}