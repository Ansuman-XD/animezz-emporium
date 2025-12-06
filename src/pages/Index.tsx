import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { TrendingSection } from '@/components/home/TrendingSection';
import { NewArrivalsSection } from '@/components/home/NewArrivalsSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <TrendingSection />
      <NewArrivalsSection />
    </Layout>
  );
};

export default Index;
