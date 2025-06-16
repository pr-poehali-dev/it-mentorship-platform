import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-black text-white py-6 px-6 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Icon name="Code" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold font-montserrat">IT прогмат</h1>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Найди ментора, прокачай навыки
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Получи оффер с прибавкой
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Найти ментора
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg"
            >
              <Icon name="UserPlus" size={20} className="mr-2" />
              Стать ментором
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
