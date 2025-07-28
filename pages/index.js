import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Gagné</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div box-='square' shear-='top'>
        <div className='header' is-='row' align-='between'>
          <span is-='badge' variant-="background2">jacob@home:~$</span>
          <span is-='badge' variant-="background2">
            <Link href='/'>home</Link>
          </span>
        </div>
        <div id='content'>
          <p><span is-='spinner' className='spinner' variant-='dots'/> Site is under construction.</p>
        </div>
      </div>
    </>
  )
}
