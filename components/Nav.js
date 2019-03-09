import Link from 'next/link'

export default () => (
  <>
    <nav>
      <style jsx>{`
        nav {
          position: absolute;
          right: 10px;
          top: 10px;
        }
      `}</style>
      <Link href='/'><a>home</a></Link>
      {` `}|{` `}
      <Link href='/about'><a>about</a></Link>
    </nav>
    <>
      <style jsx>{`
        span {
          background: yellow;
        }
      `}</style>
      <span>to see flicker between server/client rendering choose "yes" and refresh page</span>
    </>
  </>
)
