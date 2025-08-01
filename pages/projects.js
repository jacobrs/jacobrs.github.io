import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Jacob Gagné - Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div box-='square' shear-='both'>
        <Header title="cd projects" />
        <div id='content'>
          Under construction <br/><br/>
        </div>
        <Footer />
      </div>
    </>
  )
}
