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
            <h1 className="text-2xl font-bold font-montserrat">IT прагмат</h1>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-4 text-[#9b87f5]">
            Найди ментора, прокачай навыки
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Получи оффер с прибавкой или войди в IT
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white px-8 py-4 text-lg"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScSqsQ08dkx3cdCiMbnkwExRM78c94cd8bhgrWKHmRkb03leQ/viewform?usp=pp_url&entry.1234567890=IT%20прагмат",
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
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg"
              onClick={() => window.open("https://t.me/pragmat_it", "_blank")}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram сообщество
            </Button>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/30">
            <p className="text-green-400 text-lg font-semibold flex items-center justify-center gap-2">Оплата 100% от первого оффера, после трудоустройства</p>
            <p className="text-green-300 text-sm mt-1">Предоплата от 10 тысяч
Ежемесячная подписка 5 тысяч
Больше ничего платить не нужно</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;