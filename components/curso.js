import styles from "../styles/curso.module.css"

export default function Curso({curso}) {
  const {contenido, imagen, titulo} = curso.attributes
  console.log(imagen.data.attributes.url)
  return (
    <section className={`${styles.fondo} curso`}>
      <style jsx>{`
        .curso {
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.url}); 
        }
      `}</style>
      <div className={`${styles.contenido} contenedor`}>
        <div className={styles.informacion}>
          <h3>{titulo}</h3>
          <p>{contenido}</p>
        </div>
      </div>
    </section>
  )
}
