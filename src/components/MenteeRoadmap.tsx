import { useState } from "react";
import Icon from "@/components/ui/icon";

const MenteeRoadmap = () => {
  const [activeStep, setActiveStep] = useState(0);

  const roadmapSteps = [
    {
      icon: "HandHeart",
      title: "Первая встреча",
      description: "Определение навыков и направления роста",
      details: "Знакомимся, оцениваем текущий уровень, ставим цели",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Map",
      title: "План развития",
      description:
        "Индивидуальный план развития, рекомендации по развитию навыков",
      details: "Создаем персональную roadmap и проверяем новые знания",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: "Zap",
      title: "Mock-интервью",
      description: "Проведение mock-интервью, стресс-тестирование",
      details: "Отрабатываем навыки собеседования в безопасной среде",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "FileText",
      title: "Анализ резюме",
      description: "Анализ и улучшение резюме",
      details: "Делаем резюме привлекательным для работодателей",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Search",
      title: "Поиск вакансий",
      description: "Поиск подходящих вакансий для откликов",
      details: "Находим релевантные позиции и составляем стратегию подачи",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: "MessageSquare",
      title: "Разбор интервью",
      description: "Разбор интервью и детализация плана прохождения",
      details: "Готовимся к каждому собеседованию индивидуально",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: "Trophy",
      title: "Получение оффера",
      description: "Получение оффера и оплата консультаций ментора",
      details: "Успешное трудоустройство и завершение программы",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Дорожная карта для менти
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            7-этапный путь от начинающего до успешного специалиста
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {roadmapSteps.map((step, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                index <= activeStep ? "opacity-100" : "opacity-70"
              }`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="w-full bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-6 w-full">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center transform transition-all duration-300 ${
                        index === activeStep
                          ? "scale-110 shadow-2xl shadow-purple-500/25"
                          : "scale-100"
                      }`}
                    >
                      <Icon
                        name={step.icon as any}
                        size={24}
                        className="text-white"
                      />
                    </div>
                  </div>

                  {/* Content - Full Width */}
                  <div className="flex-1 min-w-0">
                    <div className="w-full">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-lg md:text-xl leading-relaxed">
                        {step.description}
                      </p>
                      <p
                        className={`text-base text-gray-400 leading-relaxed transition-all duration-300 ${
                          index === activeStep
                            ? "opacity-100 max-h-32"
                            : "opacity-60 max-h-20"
                        } overflow-hidden`}
                      >
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-3 h-12 rounded-full transition-all duration-300 ${
                        index <= activeStep
                          ? "bg-gradient-to-b from-purple-400 to-cyan-400"
                          : "bg-gray-600"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Shield" size={24} className="text-green-400" />
              <span className="text-green-400 font-semibold text-lg">
                Честно и прозрачно
              </span>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Никакой накрутки опыта, никакого обмана работодателя. Работаем в
              комьюнити с HR-сотрудниками из множества компаний.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenteeRoadmap;
