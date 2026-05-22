import { useState } from 'react'
import Navigation from './Components/Navigation/Navigation.jsx'

import './App.css'
import ContactHeader from './Components/ContactHeader/ContactHeader.jsx'
import Button from './Components/Button/Button.jsx'
import ContactForm from './Components/ContactForm/ContactForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <Navigation />
    <main className='main_container'>
      <ContactHeader />
    <ContactForm />
    </main>
  </div>
  
}

export default App
