import Layout from "../components/layout"
import Posts from "../components/posts"
import styles from "../styles/grid.module.css"

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=*`)
  const { data: posts } = await respuesta.json()
  
  return {
    props: {
      posts
    } 
  }
}

export default function Blog({posts}) {

  return (
    <>
      <Layout
        title={`Blog`}
        description={`GuitarLA - Blog de música y venta de guitarras`}
      >
        <main className='contenedor'>
          <h1 className='heading'>Blog</h1>

          <div className={styles.grid}>
            {posts?.map(post => (
              <Posts 
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>
      </Layout>
    </>
  )
}
