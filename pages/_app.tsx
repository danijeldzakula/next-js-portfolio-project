import App, { AppContext } from "next/app";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ThemeProvider } from "next-themes";
import NextNProgress from 'nextjs-progressbar';
import WebSocketComponent from "@/components/webSocket/WebSocket";
import "@/scss/main.scss";

interface RouterProps {
  loading: boolean;
  loadingKey: number;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [routerLoading, setRouterLoading] = useState<RouterProps>({
    loading: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setRouterLoading((prev) => ({
        ...prev,
        loading: true,
        loadingKey: prev.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setRouterLoading((prev) => ({
        ...prev,
        loading: false,
      }));
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router]);


  useEffect(() => {
    const loading = routerLoading.loading;
    setLoading(loading);
  }, [routerLoading]);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <WebSocketComponent />
        <NextNProgress showOnShallow={false} options={{ showSpinner: false }} color="#0066cc" />
        <Component {...pageProps} loading={loading} />
      </ThemeProvider>
    </Provider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
