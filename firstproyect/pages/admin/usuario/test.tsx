import React from 'react'
import Link from "next/link"
const test = () => {
  return (
    <div className="bg-green-500"> 
      <div > Pagina de Usuarios</div>
      <Link href="/">
      <a>Ir al Home</a>
      </Link>
    </div>
  )
}

export default test
