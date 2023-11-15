import './App.scss'
import { Layout } from './components'
import AppRoutes from './routes/AppRoutes'

function App() {
	return (
		<div className='App'>
			<Layout>
				<AppRoutes />
			</Layout>
		</div>
	)
}

export default App
