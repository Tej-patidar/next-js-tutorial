"use client"
import styles from './page.module.css'


export default function Home() {
  const apple = () => {
    alert("fruit!!")
  }
  return (
    <main className={styles.main}>
      <Users name="Tarun"/>
      <Users name="Peter"/>
      <Users name="Tannu"/>
      <h1>Home Page</h1>

      <button onClick={()=>alert("hello")}>hello</button>
    </main>
  )
}


const Users=(props)=>{
  return(
    <div>
      <h2>Username is {props.name}</h2>
    </div>
  )
}
