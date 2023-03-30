import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import "../styles/globals.scss";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
