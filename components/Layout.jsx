import { useContext } from 'react';
import Head from 'next/head';
import Header from './Header';
import DataContext from './DataContext';
import Marquee from './Marquee';
import './Layout.scss';

const HeadMetaData = (
  <Head>
        <title>Marquee Test</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          charSet="utf-8"
          key="viewport"
        />
  </Head>
);

export default function Layout({children, pageTitle}) {
  const { pages } = useContext(DataContext);
  // workaround when pages is initially set to undefined 
  if (!pages || !pageTitle) {
    return (
      <>
        {HeadMetaData}
        <div className="layout">
          <Header />
          {children}
        </div>
      </>
    )
  }
  let pageData;
  for (let data of pages) {
    if (data.title === pageTitle) {
      pageData = data;
      break;
    }
  }

  const { blocks } = pageData;
  const content = blocks[0];
  let { headline, subhead, cta, background } = content;
  background = background.replace(/_/gi, '-');

  return (
    <>
      {HeadMetaData}
      <div className="background" 
        style={{
          background: `url(/${background}) no-repeat center center fixed`,
          backgroundSize: 'cover'}}
        >
        <div className="layout">
          <Header />
          <Marquee 
            headline={headline} 
            subhead={subhead} 
            cta={cta} 
          />
        </div>
      </div>
    </>
  )
}