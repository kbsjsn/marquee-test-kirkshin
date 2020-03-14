import { useEffect, useState } from 'react';
import axios from 'axios';
import DataContext from '../components/DataContext';
import App from 'next/app';
import './app.scss';

function MyApp ({ Component, pageProps }) {
  const [pages, setPages] = useState();
  
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('http://localhost:3000/data.json');
      
      setPages(data.pages);
    }
    fetchData();
  }, [])
  return (
    <DataContext.Provider value={{ pages }}>
      <Component {...pageProps} />
    </DataContext.Provider>
  )
}

// function MyApp ({ Component, pageProps }) {
//   return (
//     <Component {...pageProps} />
//   )
// }


// MyApp.getInitialProps = async (appContext) => {
//   // console.log('appContext', appContext);
//   const appProps = await App.getInitialProps(appContext);
//   const { data } = await axios.get('http://localhost:3000/data.json');
//   return { ...appProps, ...data }
// }

export default MyApp;