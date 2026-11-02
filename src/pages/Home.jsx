import Hero from '../components/Hero';
import Services from '../components/Services';

function Home() {
  return (
    <main>
      <Hero />
      <section className="info">
        <h2>Our Services</h2>
        <p>We create beautiful, responsive, and modern web applications.</p>
      </section>

        <Services />
    </main>
  );
}

export default Home;
