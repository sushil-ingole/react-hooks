import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UseEffect from './UseEffect.tsx';
import UseState from './UseState.tsx';
import UseMemo from './UseMemo.tsx';
import UseCallback from './UseCallback.tsx';
import UseContextHelper from './UseContextHelper.tsx';
import UseRef from './UseRef.tsx';
import Memo from './Memo.tsx';
import UseReducer from './UseReducer.tsx';
import UseImperativeHook from './UseImperative.tsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <UseState />
      },
      {
        path: '/useEffect',
        element: <UseEffect />
      },
      {
        path: '/useMemo',
        element: <UseMemo />
      },
      {
        path: '/useCallback',
        element: <UseCallback />
      },
      {
        path: '/useContext',
        element: <UseContextHelper />
      },
      {
        path: '/useRef',
        element: <UseRef />
      },
      {
        path: '/memo',
        element: <Memo />
      },
      {
        path: '/useReducer',
        element: <UseReducer />
      },
      {
        path: '/useImperative',
        element: <UseImperativeHook />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
