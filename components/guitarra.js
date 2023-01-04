import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitarra.module.css"

export default function Guitarras({guitarra}) {
  const { descripcion, nombre, imagen, precio, url } = guitarra

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={100} height={100} alt={`imagen de guitarra ${nombre}`} className={styles.imagen}/>

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <Link className='enlace' href={`/guitarra/${url}`} >Ver producto</Link>
      </div>
    </div>
  )
}
