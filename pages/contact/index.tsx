import { Layout } from '@/layouts/Layout';
import YouTube from "react-youtube";

interface Props {
  loading: boolean
}

export default function Contact({ loading }: Props) {
  const metadata = {
    title: 'Contact'
  }

  if (loading) {
    return null;
  }

  return (
    <Layout metadata={metadata}>
      <section>
        <YouTubeVideo videoId="DEPwA3mv_R8" />
      </section>
    </Layout>
  )
}


interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  const opts = {
    height: '700',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
    controls: 0,
  };

  return <YouTube videoId={videoId} opts={opts} />
};