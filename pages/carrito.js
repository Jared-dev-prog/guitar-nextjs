import { useEffect, useState } from "react"
import Layout from "../components/layout"
import Image from "next/image"
import styles from "../styles/carrito.module.css"

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {
  const [ total, setTotal ] = useState(0)

  useEffect(() => {
    function calcularTotal() {
      const cantitadTotal = carrito.reduce((total, producto) => total += (producto.cantidad * producto.precio), 0)
      setTotal(cantitadTotal)
    }

    calcularTotal()
  }, [carrito])

  return (
    <Layout title='Carrito' description='GuitarLA - Productos en carrito para compra'>
      <main className='contenedor'>
        <h1 className='heading'>Carrito</h1>

        <div className={styles.contenido}>
          <div>
            <h2>Articulos</h2>

            {carrito?.length === 0 ? 'Carrito vacío' : (
              carrito?.map(producto => (
                <div key={producto.id} className={styles.producto}>
                  <Image src={producto.imagen} width={100} height={100} alt={`imagen de producto ${producto.nombre}`}/>

                  <div>
                    <h3>{producto.nombre}</h3>
                    <p>Cantidad</p>
                    <select
                      value={producto.cantidad}
                      onChange={e => actualizarCantidad({
                        cantidad: +e.target.value, 
                        id: producto.id
                      })}
                    >
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                    </select>
                    <p>Precio: <span>${producto.precio}</span></p>
                    <p>Subtotal: <span>${producto.precio * producto.cantidad}</span></p>
                  </div>

                  <button 
                    onClick={() => eliminarProducto(producto.id)}
                    type='button'
                    className={styles['btn-eliminar']}
                    >x</button>
                </div>
              ))
            )}
          </div>

          <aside className={styles.resumen}>
            <h2>Resumen del pedido</h2>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  )
}
