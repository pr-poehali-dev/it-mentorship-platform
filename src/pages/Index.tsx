import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import MentorshipDirections from "@/components/MentorshipDirections";
import MentorsGallery from "@/components/MentorsGallery";
import HRPartners from "@/components/HRPartners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HowItWorks />
      <MentorshipDirections />
      <MentorsGallery />
      <HRPartners />
      <Footer />
    </div>
  );
};

export default Index;
