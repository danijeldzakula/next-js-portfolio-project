import dynamic from 'next/dynamic';

const isClient = typeof window === 'undefined';

const NonSSR = ({ children }: { children?: React.ReactNode }) => {
  if (!isClient) {
    return children;
  }

  return null;
}

export default dynamic(() => Promise.resolve(NonSSR), { ssr: false });
