import Link from 'next/link';

export default function Footer() {
  return (
    <div className='header'>
      <span is-='badge' className='footer-link'>
        <Link href='https://github.com/jacobrs' target='_blank'>
          github
        </Link>
      </span>
      <span is-='badge' className='footer-link'>
        <Link href='https://webtui.ironclad.sh/start/ascii-boxes/' target='_blank'>
          built with webtui
        </Link>
      </span>
    </div>
  );
}