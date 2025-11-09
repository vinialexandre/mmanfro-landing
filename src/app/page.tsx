import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Results from '@/components/Results';
import BonusClass from '@/components/BonusClass';
import Testimonials from '@/components/Testimonials';
import CourseAccess from '@/components/CourseAccess';
import CTA from '@/components/CTA';
import Newsletter from '@/components/Form';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Results />
        <BonusClass />
        <Testimonials />
        <CourseAccess />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}