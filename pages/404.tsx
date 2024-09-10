import { Layout } from '@/layouts/Layout';

export default function NotFoundError() {
  const metadata = {
    title: 'Error'
  }

  return (
    <Layout metadata={metadata}>
      <section>
        <div className='container'>
          <h1>Not Found Error | 404</h1>
        </div>
      </section>
    </Layout>
  )
}
