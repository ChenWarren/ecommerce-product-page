import './App.css'
import Header from './sections/Header'
import Product from './sections/Product'

function App() {

  return (
    <>
      <main className='md:container md:mx-auto'>
        <h1 className='text-3xl font-bold'>Sneakers</h1>
        <Header />
        <Product />
      </main>
    </>
  )
}

export default App
