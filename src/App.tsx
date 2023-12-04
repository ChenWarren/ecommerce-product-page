import './App.css'
import Header from './sections/Header'
import Product from './sections/Product'

function App() {

  return (
    <>
      <main className='md:container md:scroll-px-0.5 md:mx-auto'>
        <Header />
        <Product />
      </main>
    </>
  )
}

export default App
