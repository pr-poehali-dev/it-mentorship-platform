import { useState } from "react";
import Icon from "@/components/ui/icon";

const PlatformOverview = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const platformSteps = [
    {
      icon: "UserPlus",
      title: "Подключение к ментору",
      description: "Выбираете ментора по направлению и опыту",
      details: "подберем подходящего ментора для твоих целей",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: "Target",
      title: "Постановка целей",
      description: "Определяете направление развития и цели",
      details:
        "Вместе с ментором анализируете текущий уровень и ставите достижимые цели",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: "BookOpen",
      title: "Обучение и практика",
      description: "Получаете знания и отрабатываете навыки",
      details:
        "Изучаете материалы, выполняете задания, получаете обратную связь от ментора",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: "Briefcase",
      title: "Трудоустройство",
      description: "Получаете работу мечты с поддержкой ментора",
      details:
        "Подготовка к собеседованиям, поиск вакансий и успешное трудоустройство",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Как это работает
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Простой и эффективный путь к карьерному росту с персональным
            ментором
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {platformSteps.map((step, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${step.bgColor} ${step.borderColor} backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer group h-80`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Background Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 ${hoveredStep === index ? "scale-110 rotate-12" : "scale-100"}`}
              >
                <Icon
                  name={step.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>

              {/* Content */}
              <div className="text-center relative z-10">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-4">{step.description}</p>

                {/* Details with absolute positioning */}
                <div className="relative">
                  <p
                    className={`text-sm text-gray-400 transition-opacity duration-300 absolute top-0 left-0 right-0 ${
                      hoveredStep === index ? "opacity-100" : "opacity-0"
                    } leading-relaxed px-2`}
                  >
                    {step.details}
                  </p>
                </div>
              </div>

              {/* Connecting Arrow */}
              {index < platformSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <Icon
                      name="ArrowRight"
                      size={16}
                      className="text-purple-400"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20 text-center">
            <Icon
              name="Users"
              size={32}
              className="text-blue-400 mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">20 менторов</h4>
            <p className="text-gray-400 text-sm">
              Опытные специалисты из топовых компаний
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-green-900/30 to-cyan-900/30 rounded-xl border border-green-500/20 text-center">
            <Icon
              name="TrendingUp"
              size={32}
              className="text-green-400 mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">100% успеха</h4>
            <p className="text-gray-400 text-sm">
              Менти успешно трудоустраиваются
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 text-center">
            <Icon
              name="Clock"
              size={32}
              className="text-purple-400 mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">3-6 месяцев</h4>
            <p className="text-gray-400 text-sm">
              Средний срок до трудоустройства
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
