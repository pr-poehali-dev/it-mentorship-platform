import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center border-t border-gray-800 pt-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-[#9b87f5] rounded-lg flex items-center justify-center">
              <Icon name="Code" size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold font-montserrat">
              IT прагмат
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 IT PRAGMAT. Твой путь к успешной IT-карьере.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
