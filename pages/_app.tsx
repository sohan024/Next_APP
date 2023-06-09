import { AppProps } from "next/app"
import { Provider } from "react-redux"
import store from "../store"
import Navbar from "./base/Navbar"

export default function MyAPP({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}