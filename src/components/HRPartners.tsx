import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HRPartners = () => {
  const benefits = [
    {
      icon: "FileText",
      title: "Помощь с резюме",
      description: "Профессиональное составление и оптимизация резюме",
    },
    {
      icon: "MessageCircle",
      title: "Подготовка к собеседованиям",
      description: "Mock-интервью и разбор сложных вопросов",
    },
    {
      icon: "Users",
      title: "Прямой контакт с HR",
      description: "Чат с HR-партнерами для приоритетного рассмотрения",
    },
    {
      icon: "Trophy",
      title: "Гарантия качества",
      description: "Наших кандидатов рассматривают в первую очередь",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
            HR-партнёры
          </h2>
          <p className="text-xl text-gray-300">
            Помогаем с резюме и подготовкой к собеседованиям
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={benefit.icon as any}
                  size={24}
                  className="text-white"
                />
              </div>
              <h3 className="font-bold mb-2 font-montserrat">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#9b87f5]/20 rounded-lg p-8 border border-[#9b87f5]/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 font-montserrat">
                Эксклюзивный доступ к HR-сообществу
              </h3>
              <p className="text-gray-300">
                Прямая связь с рекрутерами из ведущих IT-компаний. Получи
                преимущество в поиске работы и ускорь процесс трудоустройства.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <Button
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#8b77e5] w-full md:w-auto"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Присоединиться к чату
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRPartners;
