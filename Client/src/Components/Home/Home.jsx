import React from 'react'
import styles from "./Home.module.css"

export const Home = (props) => {
  const {name} = props;
  return (
    <div className={styles.Homepage}>
        <h1>Home Page</h1>
        <h1>{`Welcome ${name}`}</h1>
        <button>Logout</button>
    </div>
  )
}
