import Layout from "../components/layout"
import Image from "next/image"
import styles from '../styles/nosotros.module.css'

const Nosotros = () => {
  return (
    <>
      <Layout
        title={`Nosotros`}
        description={`GuitarLA - página sobre nosotros`}
      >
        <main className='contenedor'>
          
          <h1 className='heading'>Nosotros</h1>

          <div className={styles.contenido}>
            <Image src={`/img/nosotros.jpg`} width={570} height={200} alt='imagen de nosotros'/>

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus ex in diam finibus, ut bibendum ipsum pretium. Duis sed nisl nulla. Duis vitae libero feugiat, porttitor turpis efficitur, vulputate metus. Suspendisse potenti. Vestibulum quis elit congue, laoreet libero quis, accumsan elit. 
              </p>
              <p>
                Nullam neque ligula, eleifend eget sodales non, aliquet non est. Donec sed lacus semper, lobortis lorem id, posuere ante. Sed pretium, odio sit amet egestas volutpat, tellus lacus tincidunt nisl, vel scelerisque massa leo at ipsum. Vestibulum hendrerit, libero dictum pellentesque faucibus, dui urna auctor leo, in tincidunt felis libero et felis. Nam sit amet consequat nisl, ac iaculis nisl.
              </p>
            </div>
          </div>
        </main>
      </Layout>   
    </>

  )
}

export default Nosotros
