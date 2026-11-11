import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
// import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { SEO } from './components/SEO';
export function App() {
  return (
    <ThemeProvider>
      <SEO />
      <Layout>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Education /> */}
        <Contact />
      </Layout>
    </ThemeProvider>);

}