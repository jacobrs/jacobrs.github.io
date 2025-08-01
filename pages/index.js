import GitLogList from '@/components/GitLogList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

import workExperienceData from '../data/work-experience.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Gagné - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div box-='square' shear-='both'>
        <Header title="git log" />
        <div id='content'>
          <GitLogList entries={workExperienceData['data']}/>
        </div>
        <Footer />
      </div>
    </>
  )
}
