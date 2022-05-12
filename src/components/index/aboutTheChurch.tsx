import styles from './../../styles/index/aboutTheChurch.module.scss';

export default function AboutTheChurch() {

  return (
    <article className={styles.main}>
      <div style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }} />

      <div className={styles.content}>
        <h1>AD Coluna Esteio da Verdade</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi doloribus officia nostrum, aperiam, repellendus nihil distinctio magni minima assumenda nemo iure quod consectetur ducimus sunt, id quasi reiciendis non mollitia.</p>
        <button>SAIBA MAIS</button>
      </div>
      <div className={styles.line} />


    </article>
  )
}