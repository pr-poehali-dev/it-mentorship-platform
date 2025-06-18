import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-black text-white py-6 px-6 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.poehali.dev/files/85d9604d-87f5-4178-89d2-a698df47d237.png"
              alt="IT-PRAGMAT"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold font-montserrat">IT прогмат</h1>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-4 text-[#9b87f5]">
            Найди ментора, прокачай навыки
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Получи оффер с прибавкой
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white px-8 py-4 text-lg"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScSqsQ08dkx3cdCiMbnkwExRM78c94cd8bhgrWKHmRkb03leQ/viewform?usp=header",
                  "_blank",
                )
              }
            >
              <Icon name="Search" size={20} className="mr-2" />
              Найти ментора
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white px-8 py-4 text-lg"
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
