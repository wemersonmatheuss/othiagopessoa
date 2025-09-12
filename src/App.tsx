import styles from "./app.module.css"

import { Main } from "./Components/Main"
import { Peoples } from "./Components/Peoples"

export function App() {
  return (
    <div className={styles.container}>
      <Main/>

      <div className={styles.context}>
        <Peoples/>
      </div>
    </div>
  )
}