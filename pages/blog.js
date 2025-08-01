import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Jacob Gagné - Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div box-='square' shear-='both'>
        <Header title="cd blog" />
        <div id='content'>
          Under construction <br/><br/>
        </div>
        <Footer />
      </div>
    </>
  )
}
