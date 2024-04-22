import Header from './components/header/header';
import SectionIntro from './components/sectionIntro/sectionIntro';
import SectionAbout from './components/sectionAbout/sectionAbout';

import './App.css';

function App() {
  return (
    <main className='container'>
      <Header/>

      <SectionIntro/>

      <SectionAbout/>
    </main>
  );
}

export default App;
