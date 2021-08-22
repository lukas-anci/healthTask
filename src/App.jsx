import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Clients from './components/Clients/Clients';
import Main from './components/Main/Main';
import Faq from './components/Faq/Faq';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Clients />
      <Main />
      <Faq />
      <Hero start />
    </div>
  );
}

export default App;
