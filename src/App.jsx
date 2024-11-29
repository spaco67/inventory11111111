import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
      </main>
    </div>
  )
}
