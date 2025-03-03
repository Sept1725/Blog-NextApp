import "styles/globals.css";
import Layout from "components/Layout";

type MyAppProps = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  Component: any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
