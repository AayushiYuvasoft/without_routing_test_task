import './App.css';
import { Suspense } from 'react';
import PageLoader from './Components/Loader/Loader';
import { Provider } from 'react-redux'
import {store, persistor} from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import MainView from './Pages/MainView/MainView';

function App() {
	
  return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Suspense fallback={<PageLoader/>}>
					<MainView />
				</Suspense>
			</PersistGate>
		</Provider>
  );
}

export default App;
