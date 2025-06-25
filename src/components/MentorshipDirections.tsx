import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MentorshipDirections = () => {
  const [activeTab, setActiveTab] = useState(0);

  const directions = [
    {
      icon: "Rocket",
      title: "С нуля",
      subtitle: "Для тех, кто не в IT",
      description: "Полный путь от новичка до трудоустройства",
      example: "Экс-бармен → Junior Python-разработчик",
      features: [
        "1. Изучить основы: HTML, CSS, JavaScript (1-2 месяца)",
        "2. Выбрать специализацию и фреймворк (2-3 недели)",
        "3. Создать первый проект для портфолио (1 месяц)",
        "4. Подготовиться к собеседованиям (2-4 недели)",
        "5. Пройти стажировку или джуниор-позицию",
        "⏱️ Общий срок: 3-6 месяцев до трудоустройства",
      ],
    },
    {
      icon: "BookOpen",
      title: "После курсов",
      subtitle: "Трудоустройство выпускников",
      description: "Помогаем найти первую работу после обучения",
      example: "Как пройти собеседование без опыта",
      features: [
        "Разбор портфолио",
        "Подготовка к техническим интервью",
        "Составление резюме",
        "Нетворкинг",
      ],
    },
    {
      icon: "Briefcase",
      title: "Прокачка карьеры",
      subtitle: "Для работающих специалистов",
      description: "Рост от джуна до сеньора и выше",
      example: "Middle → Senior → Team Lead",
      features: [
        "Архитектурные решения",
        "Лидерские навыки",
        "Переход в FAANG",
        "Повышение зарплаты",
      ],
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
          Направления менторства
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="space-y-2">
              {directions.map((direction, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    activeTab === index
                      ? "bg-[#9b87f5] text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name={direction.icon as any} size={24} />
                    <div>
                      <h3 className="font-bold">{direction.title}</h3>
                      <p className="text-sm opacity-80">{direction.subtitle}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-[#9b87f5] rounded-lg flex items-center justify-center">
                  <Icon
                    name={directions[activeTab].icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-montserrat">
                    {directions[activeTab].title}
                  </h3>
                  <p className="text-[#9b87f5]">
                    {directions[activeTab].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                {directions[activeTab].description}
              </p>

              <div className="bg-[#9b87f5]/20 rounded-lg p-4 mb-6">
                <p className="text-[#9b87f5] font-semibold">
                  📈 Пример успеха: {directions[activeTab].example}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {directions[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-[#9b87f5] hover:bg-[#8b77e5]">
                Выбрать направление
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipDirections;
