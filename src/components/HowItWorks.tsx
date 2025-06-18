import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      icon: "Target",
      title: "Выбираешь направление",
      description:
        "Новичок, после курсов или профессионал - определяем твой уровень",
    },
    {
      icon: "Users",
      title: "Подбираешь ментора",
      description: "Находишь эксперта с опытом в твоей области",
    },
    {
      icon: "TrendingUp",
      title: "Растешь в карьере",
      description:
        "Получаешь навыки, готовишься к собеседованиям, получаешь оффер",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-montserrat">
          Как это работает для менти
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Оставляешь заявку, заключаешь договор, получаешь навыки. Ментор
          помогает с резюме, разбирает собеседования. Устраиваешься на работу с
          апгрейдом.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon
                    name={step.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 font-montserrat">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-800">
          <p className="text-gray-300 text-center">
            <span className="text-green-400 font-semibold">
              Честно и прозрачно:
            </span>{" "}
            никакой накрутки опыта, никакого обмана работодателя. Есть комьюнити
            с HR-сотрудниками из множества компаний.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
