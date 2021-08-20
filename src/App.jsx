import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Clients from './components/Clients/Clients';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Clients />
      <Main />
    </div>
  );
}

export default App;
