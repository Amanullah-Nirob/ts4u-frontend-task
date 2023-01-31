import MusterLayout from "@/components/layouts/MusterLayout";
import "@/sass/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MusterLayout>
      <Component {...pageProps} />
    </MusterLayout>
  );
}
