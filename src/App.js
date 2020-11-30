import './App.scss';
import Sidebar from './components/Sidebar';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <header>
        <Sidebar />
      </header>
      <main className='main-content' data-spy='scroll' data-target='#side-bar'>
        <section id='home' className='home'>
          <Home />
        </section>
        <div style={{ background: '#F9F9FF' }}>
          <section id='about-me' className='about-me'>
            <AboutMe />
          </section>
          <section id='experience' className='experience'>
            <Experience />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
