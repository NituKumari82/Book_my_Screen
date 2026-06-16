import { Route, Routes } from 'react-router-dom'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

function App() {
  return (
    <>
      <div className="flex flex-col h-screen"> {/* Fixed typo: classaName -> className */}
        
        {/* ✅ Header sits outside Routes so it renders on every page */}
        <Header /> 

        <main className="flex-grow">
          {/* ✅ All <Route> tags must live inside the <Routes> wrapper */}
          <Routes>
            <Route path='/' element={<h1>Home Page</h1>}/>
            <Route path='/profil/:id' element={<h1>Profile Page</h1>}/>
            <Route path='/movies' element={<h1>Movie Page</h1>}/>
          </Routes>
        </main>

        {/* ✅ Footer sits outside Routes so it renders on every page */}
        <Footer />

      </div>
    </>
  )
}

export default App
