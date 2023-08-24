import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Global } from "@emotion/react"
import globalStyles from "@/styles/tailwind"
import Layout from "@/components/layouts/Layout"
import { Provider } from "react-redux"
import { persistor, store } from "@/store/store"
import { PersistGate } from "redux-persist/integration/react"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Layout>
					<Global styles={globalStyles} />
					<Component {...pageProps} />
				</Layout>
			</PersistGate>
		</Provider>
	)
}
