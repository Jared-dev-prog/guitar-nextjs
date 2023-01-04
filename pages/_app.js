import { useState, useEffect } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const carrtoLS = typeof window !== 'undefined' ? localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [] : [] 
  const [carrito, setCarrito] = useState(carrtoLS)
  const [paginaLista, setPaginaLista] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarProducto = producto => {
    const existente = carrito.some(carritoState => carritoState.id === producto.id); 
    if(existente) {
      const actualizarCarrito = carrito?.map(carritoState => {
        carritoState.cantidad = producto.cantidad
        return carritoState
      })
      setCarrito(actualizarCarrito)
    }
    else {
      setCarrito([...carrito, producto])
    }
  }

  const actualizarCantidad = producto => {
    const actualizarCantidad = carrito.map(carritoState => {
      if(carritoState.id === producto.id) {
        carritoState.cantidad = producto.cantidad
      }
      return carritoState
    })
    setCarrito(actualizarCantidad)
  }

  const eliminarProducto = id => {
    const actualizarCarrito = carrito.filter(carritoState => carritoState.id !== id)
    setCarrito(actualizarCarrito)
  }

  return paginaLista ? <Component {...pageProps} 
    carrito={carrito}
    agregarProducto={agregarProducto}
    actualizarCantidad={actualizarCantidad}
    eliminarProducto={eliminarProducto}
  /> : null
}
