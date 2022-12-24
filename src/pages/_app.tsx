import type { AppProps } from "next/app";

const master = () => {
  return "hello";
};

export default function App({ Component, pageProps }: AppProps) {
  master();
  return <Component {...pageProps} />;
}
