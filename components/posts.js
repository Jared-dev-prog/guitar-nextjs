import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "../utils/helpers"
import styles from "../styles/blog.module.css"

export default function Posts({post}) {
  const { titulo, contenido, imagen, publishedAt, url } = post
  
  return (
    <article>
      <Image src={imagen.data.attributes.formats.medium.url} width={300} height={100} alt={`imagen de post ${titulo}`}/>

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>

        <Link className='enlace' href={`/blog/${url}`}>Leer post</Link>
      </div>
    </article>
  )
}
