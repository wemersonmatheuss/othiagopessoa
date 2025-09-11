import styles from "./styles.module.css"

type Props = & React.ComponentProps<"button"> & {
    name: string
}

export function Button({ name, ...rest }:Props) {
    return (
        <div className={styles.container}>
            <button type="button" {...rest} >{name}</button>
        </div>
        
    )
}