import Header from "@/components/Header";
import PlatformOverview from "@/components/PlatformOverview";
import MenteeRoadmap from "@/components/MenteeRoadmap";
import MentorshipDirections from "@/components/MentorshipDirections";
import MentorDirectory from "@/components/MentorDirectory";
import HRPartners from "@/components/HRPartners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <PlatformOverview />
      <MenteeRoadmap />
      <MentorshipDirections />
      <MentorDirectory />
      <HRPartners />
      <Footer />
    </div>
  );
};

export default Index;
