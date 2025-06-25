import { useState } from "react";
import Icon from "@/components/ui/icon";

const HowItWorks = () => {
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
    <section className="bg-black text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Дорожная карта для менти
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            7-этапный путь от начинающего до успешного специалиста
          </p>
        </div>

        {/* Progress Line */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-800 -translate-y-1/2 z-0"></div>
          <div
            className="absolute top-1/2 left-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 -translate-y-1/2 z-10 transition-all duration-1000"
            style={{
              width: `${(activeStep / (roadmapSteps.length - 1)) * (100 - 6.25)}%`,
            }}
          ></div>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:gap-4">
          {roadmapSteps.map((step, index) => (
            <div
              key={index}
              className={`relative cursor-pointer transition-all duration-500 ${
                index <= activeStep ? "opacity-100" : "opacity-50"
              }`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="flex items-start gap-6 md:gap-8">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center relative z-10 transform transition-all duration-300 ${
                      index === activeStep
                        ? "scale-110 shadow-2xl"
                        : "scale-100"
                    }`}
                  >
                    <Icon
                      name={step.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white opacity-0 animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div
                    className={`transform transition-all duration-300 ${
                      index === activeStep ? "translate-x-0" : "translate-x-2"
                    }`}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mb-2 text-base md:text-lg">
                      {step.description}
                    </p>
                    <p
                      className={`text-sm text-gray-400 transition-all duration-300 ${
                        index === activeStep
                          ? "opacity-100 max-h-20"
                          : "opacity-0 max-h-0"
                      } overflow-hidden`}
                    >
                      {step.details}
                    </p>
                  </div>
                </div>

                {/* Animated Arrow */}
                {index < roadmapSteps.length - 1 && (
                  <div
                    className={`hidden md:block transition-all duration-300 ${
                      index < activeStep ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    <Icon
                      name="ArrowDown"
                      size={20}
                      className="text-purple-400"
                    />
                  </div>
                )}
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

export default HowItWorks;
