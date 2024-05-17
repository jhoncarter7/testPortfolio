import { useState } from 'react';
import { testPortfolio_backend } from 'declarations/testPortfolio_backend';

import Home from './components/Home';
import Quality from './components/Quality';
import About from './components/About';
import Projects from './components/Projects';
import Service from './components/Service';
import BlogSection from './components/BlogSection';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    testPortfolio_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <>
      <Home />
      <Quality />
      <About/>
      <Projects/>
      <Service/>
      <BlogSection/>
    </>

  )
}

export default App;
