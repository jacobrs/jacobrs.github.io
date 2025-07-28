import GitLogList from '@/components/GitLogList';
import Head from 'next/head';
import Link from 'next/link';

import workExperienceData from '../data/work-experience.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Gagné</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div box-='square' shear-='both'>
        <div className='header' is-='row' align-='between'>
          <span is-='badge' variant-="background2">jacob@home:~$ git log</span>
          <span is-='badge' variant-="background2" className='header-link'>
            <Link href='/'>home</Link>
          </span>
        </div>
        <div id='content'>
          <GitLogList entries={workExperienceData['data']}/>
        </div>
        <div className='header'>
          <span is-='badge' variant-="background2" className='header-link'>
            <Link href='https://github.com/jacobrs' target='_blank'>
              github
            </Link>
          </span>
          <span is-='badge' variant-="background2" className='header-link'>
            <Link href='https://webtui.ironclad.sh/start/ascii-boxes/' target='_blank'>
              built with webtui
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}
