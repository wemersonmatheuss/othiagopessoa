import styles from "./app.module.css"

import { Main } from "./Components/Main"
import { Peoples } from "./Components/Peoples"
import { Companies } from "./Components/Companies"
import { Depoiments } from "./Components/Depoiments"
import { Picture } from "./Components/Pictures"
import { About } from "./Components/About"
import { Footer } from "./Components/Footer"

export function App() {
  return (
    <div className={styles.container}>
      <Main/>

      <div className={styles.context}>
        <Peoples/>
        <Companies/>
        <Depoiments/>
        <Picture/>
        <About/>
        <Footer/>
      </div>
    </div>
  )
}