import styles from "./app.module.css"

import { Main } from "./Components/Main"

export function App() {
  return (
    <div className={styles.container}>
      <Main/>
    </div>
  )
}