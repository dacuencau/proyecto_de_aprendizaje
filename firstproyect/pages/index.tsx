import type { NextPage } from 'next'
import Link from 'next/link'
//import '../styles/globals.css'
const Home: NextPage = () => {
  return (
    <div className='bg-red-500' >
<p>pagina index</p>
<Link href="/admin/usuario/test">
<a className='cursor-pointer'>ir a admin usuario</a>
</Link>
    </div>
  )
}

export default Home
