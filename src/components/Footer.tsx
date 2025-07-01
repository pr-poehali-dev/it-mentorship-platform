import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={24} className="text-white" />
            </div>
            <h3 className="font-bold mb-2">Telegram-чат</h3>
            <p className="text-gray-300 text-sm mb-3">
              Общение с комьюнити и менторами
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
            >
              Присоединиться
            </Button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-white" />
            </div>
            <h3 className="font-bold mb-2">HR-канал</h3>
            <p className="text-gray-300 text-sm mb-3">
              Вакансии и советы по трудоустройству
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
            >
              Подписаться
            </Button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Phone" size={24} className="text-white" />
            </div>
            <h3 className="font-bold mb-2">Поддержка</h3>
            <p className="text-gray-300 text-sm mb-3">
              Техническая поддержка и вопросы
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
            >
              Написать
            </Button>
          </div>
        </div>

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
            © 2024 IT прагмат. Твой путь к успешной IT-карьере.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
