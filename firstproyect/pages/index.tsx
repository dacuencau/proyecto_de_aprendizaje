import type { NextPage } from 'next'
import Link from 'next/link'

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
