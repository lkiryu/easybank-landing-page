import Header from './components/header/header';
import SectionIntro from './components/sectionIntro/sectionIntro';
import SectionAbout from './components/sectionAbout/sectionAbout';
import SectionArticles from './components/sectionArticles/sectionArticles';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <main className='container'>
      <Header/>

      <SectionIntro/>

      <SectionAbout/>
      
      <SectionArticles/>

      <Footer/>
    </main>
  );
}

export default App;
