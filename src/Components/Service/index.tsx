import styles from "./styles.module.css"

type Props = {
    name: string;
    icon: string;
}

export function Service({ name, icon }:Props) {
    return (
        <div className={styles.container}>
            <img src={icon} alt="" />
            <p>{name}</p>
        </div>
    )
}