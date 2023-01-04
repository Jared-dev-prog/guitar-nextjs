import Layout from "../../components/layout"
import Image from "next/image"
import { formatearFecha } from "../../utils/helpers"
import styles from "../../styles/blog.module.css"

export async function getServerSideProps({query: {url}}) {
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=*`)
  const {data: post} = await respuesta.json()

  return {
    props: {
      post
    }
  }
}

export default function Post({post}) {
  const { titulo, contenido, publishedAt, imagen } = post[0].attributes
  console.log(post)
  return (
    <Layout title={`${titulo}`} description='GuitarLA - Información sobre la entra de blog'>
      <article className={`contenedor ${styles['mt-3']}`}>
        <Image className={styles.img} src={imagen.data.attributes.url} width={400} height={200} alt={`imagen de blog ${titulo}`}/>

        <div className={styles.contenido}>
          <h1>{titulo}</h1>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p>{contenido}</p>
        </div>
      </article>
    </Layout>
  )
}
