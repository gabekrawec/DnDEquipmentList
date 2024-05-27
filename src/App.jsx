// https://www.youtube.com/watch?v=w7ejDZ8SWv8
// project idea and content and .css from Traversy Media
// content added and restructured to meet our needs
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemsContainer from './items/ItemsContainer'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<ItemsContainer />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
