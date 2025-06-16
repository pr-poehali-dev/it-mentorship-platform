import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
            Готов начать свой путь в IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Запишись на бесплатную консультацию и получи персональный план
            развития
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 text-lg mb-8"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на бесплатную консультацию
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={24} className="text-white" />
            </div>
            <h3 className="font-bold mb-2">Telegram-чат</h3>
            <p className="text-gray-300 text-sm mb-3">
              Общение с комьюнити и менторами
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              Присоединиться
            </Button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-white" />
            </div>
            <h3 className="font-bold mb-2">HR-канал</h3>
            <p className="text-gray-300 text-sm mb-3">
              Вакансии и советы по трудоустройству
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              Подписаться
            </Button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Phone" size={24} className="text-white" />
            </div>
            <h3 className="font-bold mb-2">Поддержка</h3>
            <p className="text-gray-300 text-sm mb-3">
              Техническая поддержка и вопросы
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              Написать
            </Button>
          </div>
        </div>

        <div className="text-center border-t border-gray-800 pt-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Icon name="Code" size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold font-montserrat">
              IT прогмат
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 IT прогмат. Твой путь к успешной IT-карьере.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
