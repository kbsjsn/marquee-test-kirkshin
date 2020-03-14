import Layout from '../components/Layout';
import Marquee from '../components/Marquee';

const Index = () => {
  const headline = 'Lorem ipsum dolor sit amet';
  const subhead = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  const cta = 'Nemo enim ipsam voluptatem quia voluptas.';

  return (
    <Layout>
      <Marquee 
          headline={headline} 
          subhead={subhead} 
          cta={cta} 
        />
    </Layout>
  )
}

export default Index;