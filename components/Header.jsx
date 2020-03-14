import Link from 'next/link';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Link href="/">
          <a title="Home" >
            <img src="/abc.svg" alt="abc" className="logo" />
          </a>
        </Link>
        <div className="menu">
          <Link href="/industries">
            <a title="Industries">Industries</a>
          </Link>
          <Link href="/services">
            <a title="Services">Services</a>
          </Link>
          <Link href="/about-us">
            <a title="About us">About us</a>
          </Link>
        </div>
      </div>
      <a href="/" title="Contact Us" className="contact-us">Contact Us</a>
    </div>
  )
}