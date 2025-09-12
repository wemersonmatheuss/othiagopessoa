import styles from "./styles.module.css"

type Props = {
    icon: string
}

export function Social({ icon }:Props) {
    return (
        <div className={styles.container}>
            <img src={icon} alt="" />
        </div>
    )
}