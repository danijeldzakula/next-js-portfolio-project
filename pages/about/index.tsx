import { Layout } from '@/layouts/Layout';
import ToggleTheme from '@/components/toggle-theme/ToggleTheme';

interface Props {
  loading: boolean
}

export default function About({ loading }: Props) {
  const metadata = {
    title: 'About'
  }

  return (
    <Layout metadata={metadata}>
      <section>
        <div className='container'>
          <h1>About</h1>

          <ToggleTheme />
        </div>
      </section>
    </Layout>
  )
}
