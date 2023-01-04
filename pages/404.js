import Layout from "../components/layout"
import Link from "next/link"

export default function Error404() {
  return (
    <Layout title={`Página no encontrada`} description={`GuitarLA - Producto no encontrado, venta de guitarras y blog de música`}>
      <main className='contenedor'>
        <p className='error'>404 | Página no encontrada</p>
        <Link className='error_enlace' href={`/`}>Click aquí para regresar a la página de inicio</Link>
      </main>
    </Layout>
  )
}
