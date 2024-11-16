import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Section1 } from './components/Section1/Section1';
import { Section2 } from './components/Section2/Section2';
import { Section3 } from './components/Section3/Section3';
import { Section4 } from './components/Section4/Section4';
import { Section5 } from './components/Section5/Section5';
import { Section6 } from './components/Section6/Section6';

import AOS from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );  
}

export default App;
