import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
)

function App() {
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;