import { useState } from 'react'
import Layout from "../../components/layout"
import Image from "next/image"
import styles from "../../styles/guitarra.module.css"

// export async function getServerSideProps({query : {url}}) {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//   const {data : guitarra} = await respuesta.json()

//   return ({
//     props: {
//       guitarra
//     }
//   })
// }

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const {data} = await respuesta.json()

  const paths = data?.map(guitarra => ({
    params : {
      url : guitarra.attributes.url
    }
  }))
  return {
    paths, 
    fallback: false
  }
}

export async function getStaticProps({params : {url}}) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const {data : guitarra} = await respuesta.json()

  return ({
    props: {
      guitarra
    }
  })
}

export default function Producto({guitarra, agregarProducto}) {
  const [ cantidad, setCantidad ] = useState(0)
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

  const handleSubmit = e => {
    e.preventDefault()
    
    if(cantidad < 1) {
      alert('Upps!! opción no válida')
      return
    }

    const producto = {
      id: guitarra[0].id,
      nombre, 
      descripcion, 
      imagen: imagen.data.attributes.url, 
      precio, 
      cantidad
    }

    agregarProducto(producto)
  }

  return (
    <Layout 
      title={`${nombre}`}
      description={`GuitarLA - descripcion del producto, venta de guitarras y más`}
    >
      <main className='contenedor'>
        <div className={styles.guitarra}>
          <Image src={imagen.data.attributes.url} width={200} height={100} alt={`imagen de guitarra ${nombre}`} className={styles.imagen}/>

          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>

            <form 
              onSubmit={handleSubmit}
              className={styles.formulario}
            >
              <label htmlFor='cantidad'>Cantidad</label>
              <select
                id='cantidad' 
                onChange={e => setCantidad(+e.target.value)}
              >
                <option value='0'>Seleccione</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>

              <input value='Agregar al carrito' type='submit'/>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}
