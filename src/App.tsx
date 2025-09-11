import styles from "./app.module.css"

import { Button } from "./Components/Button"

export function App() {
  return (
    <div className={styles.container}>
      <Button name="QUERO SABER MAIS"/>
    </div>
  )
}