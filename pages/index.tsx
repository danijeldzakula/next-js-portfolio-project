import { Layout } from '@/layouts/Layout';
import { getData } from '@/services/data.services';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Data {
  data: {
    length: number;
    map: any;
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
}

interface DataMap {
  id: number; 
  userId: number; 
  title: string; 
  completed: boolean;
}

interface Props extends Data {
  loading: boolean
}

export default function Home({ data }: Props) {
  const router = useRouter();
  

  const metadata = {
    title: 'Home'
  }

  const renderData = data.map(({ id, userId, title, completed }: DataMap) => {
    return <Card key={id} id={id} userId={userId} title={title} completed={completed} />
  });

  const isPokemon = data && data.length > 0;

  const handleChangeRouter = ({ limit }: { limit: string }) => {
    const url = `?_start=0&_limit=${limit}`;
    if (!router.asPath.includes(url)) {
      router.replace(url, undefined, { shallow: false })
    }
  }

  return (
    <Layout metadata={metadata}>
      {isPokemon && (
        <section className='card-wrapper'>
          <div className='container'>
            <div className='section-header'>
              <h1>Data</h1>

              <div className='flex'>
                <button onClick={() => handleChangeRouter({ limit: '5' })} type='button'>5</button>
                <button onClick={() => handleChangeRouter({ limit: '10' })} type='button'>10</button>
                <button onClick={() => handleChangeRouter({ limit: '15' })} type='button'>15</button>
                <button onClick={() => handleChangeRouter({ limit: '20' })} type='button'>20</button>
              </div>
            </div>
            
            <div className='row'>
              {renderData}
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}

const Card = ({ id, title, completed }: DataMap) => {
  const isCompleted = (
    <>
      {completed ? (
        <span className='success'>Completed</span>
      ) : (
        <span className='error'>Uncompleted</span>
      )}
    </>
  )

  return (
    <div className='card'>
      <figure className='card-image'>
        <h3>{title}</h3>

        <small>{isCompleted}</small>
      </figure>

      <div className='card-body'>
        <Link href={`/${id}`}>Go to site</Link>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: any) {
  const { _limit } = ctx.query;

  const { data } = await getData(_limit);

  return {
    props: {
      data: data
    }
  };
}