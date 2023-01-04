import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import Curso from "../components/curso"
import Posts from "../components/posts"
import styles from "../styles/grid.module.css"

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=*`
  const urlCurso = `${process.env.API_URL}/curso?populate=*`
  const urlPosts = `${process.env.API_URL}/posts?populate=*`

  const [resGuitarras, resCurso, restPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlPosts)
  ])

  const [{data: guitarras}, {data: curso}, {data: posts}] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    restPosts.json()
  ])

  return {
    props : {
      guitarras,
      curso,
      posts
    }
  }
}

export default function Home({guitarras, curso, posts}) {

  return (
    <>
      <Layout
        title={'Inicio'}
        description={`GuitarLA - página de inicio, venta de guitarras y blog de música`}
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>

          <section className={styles.grid}>
            {guitarras?.map(guitarra => (
                <Guitarra 
                  key={guitarra?.id}
                  guitarra={guitarra?.attributes}
                />
              ))}           
          </section>
        </main>

        <Curso 
          curso={curso}
        />

        <section className='contenedor'>
          <h2 className='heading'>Blog</h2>

          <div className={styles.grid}>
            {posts?.map(post => (
              <Posts 
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}
