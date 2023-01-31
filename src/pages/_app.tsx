import MusterLayout from "@/components/layouts/MusterLayout";
import { store } from "@/redux/store";
import "@/sass/style.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
let persistor = persistStore(store);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MusterLayout>
          <Component {...pageProps} />
        </MusterLayout>
      </PersistGate>
    </Provider>
  );
}
