import HeroSection from "@/components/hero";
import ExperienceSection from "@/components/experience";
import ViewContainer from "@/components/view-container";
import ContactSection from "@/components/contact";
import FreelancePreview from "@/components/freelance-preview";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <FreelancePreview />
      {/* <ProjectSection />*/}
    </>
  );
};

export default Home;
