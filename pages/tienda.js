import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import styles from "../styles/grid.module.css"

// export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`)
//   const {data: guitarras} = await respuesta.json()

//   return {
//     props: {
//       guitarras
//     }
//   }
// }

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`)
  const {data: guitarras} = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}

export default function Tienda({guitarras}) {

  return (
    <>
      <Layout
        title={`Tienda`}
        description={`GuitarLA - Tienda virtual de venta de guitarras y blog de música`}
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>

          <div className={styles.grid}>
            {guitarras?.map(guitarra => (
              <Guitarra 
                key={guitarra?.id}
                guitarra={guitarra?.attributes}
              />
            ))}
          </div>

        </main>
      </Layout>
    </>
  )
}
