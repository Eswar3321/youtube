import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import WatchPage from './components/WatchPage';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import store from './utils/store.js';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
