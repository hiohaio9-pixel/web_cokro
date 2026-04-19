import Navbar from '../components/cokro/Navbar';
import HeroSection from '../components/cokro/HeroSection';
import AboutSection from '../components/cokro/AboutSection';
import ServicesSection from '../components/cokro/ServicesSection';
import GallerySection from '../components/cokro/GallerySection';
import KrojeSection from '../components/cokro/KrojeSection';
import InstagramSection from '../components/cokro/InstagramSection';
import WhySection from '../components/cokro/WhySection';
import CertifikatSection from '../components/cokro/CertifikatSection';
import ContactSection from '../components/cokro/ContactSection';
import Footer from '../components/cokro/Footer';
import SevDivider from '../components/cokro/SevDivider';

const IMAGES = {
  hero: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/4a04cbc60_valasky_kroj_prace.png',
  about: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/3e8a31404_IMG_24803.jpg',
  service: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/f8b9c495d_generated_7dca0047.png',
  gallery: [
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/e2398741a_generated_5b763ad7.png',
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/140309c9b_generated_73ce788b.png',
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/dabcfbf31_generated_f75f08c0.png',
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/3060ac4ba_generated_bad14f95.png',
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/d55481ebe_generated_916b18f7.png',
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/707422f54_generated_6578ecf0.png',
  ],
  instagram: [
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/e2398741a_generated_5b763ad7.png',
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/3ff0ad265_generated_37404cd9.png',
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/140309c9b_generated_73ce788b.png',
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/f8b9c495d_generated_7dca0047.png',
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/3060ac4ba_generated_bad14f95.png',
    'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/707422f54_generated_6578ecf0.png',
  ],
};

export default function Home() {
  return (
    <div className="font-body">
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <SevDivider />
      <AboutSection aboutImage={IMAGES.about} />
      <SevDivider />
      <ServicesSection serviceImage={IMAGES.service} />
      <SevDivider />
      <KrojeSection />
      <SevDivider />
      <GallerySection />
      <SevDivider />
      <InstagramSection />
      <SevDivider />
      <WhySection />
      <SevDivider />
      <CertifikatSection />
      <SevDivider />
      <ContactSection />
      <Footer />
    </div>
  );
}