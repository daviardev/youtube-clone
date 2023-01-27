import { Route, Routes } from 'react-router-dom'

import NotFound from 'pages/NotFound'

const App = () => {
  return <>
    <Routes>
      <Route path='/' element={<h1>Inicio</h1>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}

export default App
