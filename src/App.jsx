import { Route, Routes } from 'react-router-dom'

import NotFound from 'pages/NotFound'

import AppContext from 'context/AppContext'

import Feed from 'components/Feed'
import Header from 'components/Header'
import SearchResult from 'components/SearchResult'
import VideoDetails from 'components/VideoDetails'

const App = () => {
  return <>
    <AppContext>
      <div className='flex flex-col h-full'>
        <Header />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </AppContext>
  </>
}

export default App
