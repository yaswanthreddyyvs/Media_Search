import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {



  return (
    <div className='min-h-screen w-full text-white bg-gray-950'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App