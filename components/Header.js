import Link from 'next/link';

export default function Header({ title }) {
  return (
    <div className='header' is-='row' align-='between'>
      <span is-='badge'> jacob@home:~$ {title}<span className='blink'>&#9608;</span></span>
      <span>
        <span is-='badge' className='header-link'>
          <Link href='/'>home</Link>
        </span>&nbsp;
        <span is-='badge' className='header-link'>
          <Link href='/blog'>blog</Link>
        </span>&nbsp;
        <span is-='badge' className='header-link'>
          <Link href='/projects'>projects</Link>
        </span>
      </span>
    </div>
  );
}
