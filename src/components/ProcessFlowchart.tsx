import Icon from "@/components/ui/icon";

const ProcessFlowchart = () => {
  const blocks = [
    // Верхний ряд - Работа с резюме
    {
      id: "resume-analysis",
      title: "Анализ резюме",
      category: "resume",
      position: { x: 20, y: 10 },
      icon: "FileText",
    },
    {
      id: "resume-improvement",
      title: "Улучшение резюме",
      category: "resume",
      position: { x: 45, y: 10 },
      icon: "Edit",
    },
    {
      id: "hr-attract",
      title: "Привлекат ельность для HR",
      category: "success",
      position: { x: 70, y: 10 },
      icon: "Target",
    },

    // Средний ряд - Основной процесс
    {
      id: "start-consultation",
      title: "Старт консультации",
      category: "start",
      position: { x: 5, y: 35 },
      icon: "Play",
    },
    {
      id: "first-meeting",
      title: "Первая встреча",
      category: "consultation",
      position: { x: 20, y: 35 },
      icon: "Users",
    },
    {
      id: "weakness-analysis",
      title: "Анализ слабых сторон",
      category: "consultation",
      position: { x: 35, y: 35 },
      icon: "Search",
    },
    {
      id: "individual-plan",
      title: "Индивид уальный план развития",
      category: "development",
      position: { x: 20, y: 50 },
      icon: "BookOpen",
    },
    {
      id: "skill-recommendations",
      title: "Рекомендации по развитию навыков",
      category: "development",
      position: { x: 45, y: 50 },
      icon: "TrendingUp",
    },
    {
      id: "repeat-consultation",
      title: "Повторная консультация",
      category: "consultation",
      position: { x: 70, y: 50 },
      icon: "RotateCcw",
    },

    // Нижний ряд - Подготовка к собеседованиям
    {
      id: "mock-interviews",
      title: "Проведение mock-интервью",
      category: "interview",
      position: { x: 20, y: 70 },
      icon: "MessageCircle",
    },
    {
      id: "feedback-analysis",
      title: "Разбор отзывов",
      category: "interview",
      position: { x: 45, y: 70 },
      icon: "MessageSquare",
    },
    {
      id: "stress-testing",
      title: "Стресс-тестирование",
      category: "interview",
      position: { x: 70, y: 70 },
      icon: "Zap",
    },
    {
      id: "interview-feedback",
      title: "Фидбек по интервью",
      category: "success",
      position: { x: 90, y: 70 },
      icon: "CheckCircle",
    },

    // Поиск вакансий
    {
      id: "job-search",
      title: "Поиск подходящих вакансий",
      category: "job-search",
      position: { x: 5, y: 85 },
      icon: "Search",
    },
    {
      id: "application-help",
      title: "Помощь с откликами",
      category: "job-search",
      position: { x: 25, y: 85 },
      icon: "Send",
    },

    // Финальный результат
    {
      id: "job-readiness",
      title: "Готовность к трудоус тройству",
      category: "final",
      position: { x: 60, y: 90 },
      icon: "Award",
    },
  ];

  const connections = [
    // Верхний поток резюме
    { from: "resume-analysis", to: "resume-improvement" },
    { from: "resume-improvement", to: "hr-attract" },

    // Основной поток
    { from: "start-consultation", to: "first-meeting" },
    { from: "first-meeting", to: "weakness-analysis" },
    { from: "weakness-analysis", to: "individual-plan" },
    { from: "individual-plan", to: "skill-recommendations" },
    { from: "skill-recommendations", to: "repeat-consultation" },

    // Поток интервью
    { from: "repeat-consultation", to: "mock-interviews" },
    { from: "mock-interviews", to: "feedback-analysis" },
    { from: "feedback-analysis", to: "stress-testing" },
    { from: "stress-testing", to: "interview-feedback" },

    // Поток поиска работы
    { from: "start-consultation", to: "job-search" },
    { from: "job-search", to: "application-help" },

    // К финальному результату
    { from: "application-help", to: "job-readiness" },
    { from: "interview-feedback", to: "job-readiness" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "start":
        return "bg-blue-600";
      case "consultation":
        return "bg-blue-500";
      case "development":
        return "bg-yellow-600";
      case "interview":
        return "bg-purple-600";
      case "job-search":
        return "bg-red-600";
      case "resume":
        return "bg-cyan-500";
      case "success":
        return "bg-green-600";
      case "final":
        return "bg-green-500";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-montserrat">
          Как проходит процесс менторства
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Детальная схема работы с ментором: от первой консультации до успешного
          трудоустройства
        </p>

        <div className="relative bg-gray-900 rounded-2xl p-8 min-h-[600px] overflow-hidden">
          {/* SVG для соединительных линий */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {connections.map((connection, index) => {
              const fromBlock = blocks.find((b) => b.id === connection.from);
              const toBlock = blocks.find((b) => b.id === connection.to);
              if (!fromBlock || !toBlock) return null;

              const fromX = (fromBlock.position.x / 100) * 100 + 6;
              const fromY = (fromBlock.position.y / 100) * 100 + 3;
              const toX = (toBlock.position.x / 100) * 100 + 6;
              const toY = (toBlock.position.y / 100) * 100 + 3;

              return (
                <line
                  key={index}
                  x1={`${fromX}%`}
                  y1={`${fromY}%`}
                  x2={`${toX}%`}
                  y2={`${toY}%`}
                  stroke="#4b5563"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
              );
            })}

            {/* Определение стрелки */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#4b5563" />
              </marker>
            </defs>
          </svg>

          {/* Блоки процесса */}
          <div className="relative" style={{ zIndex: 2 }}>
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${getCategoryColor(block.category)} rounded-lg p-4 text-white text-sm font-medium shadow-lg hover:scale-105 transition-transform cursor-pointer max-w-[140px] text-center`}
                style={{
                  left: `${block.position.x}%`,
                  top: `${block.position.y}%`,
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <Icon
                    name={block.icon as any}
                    size={20}
                    className="text-white"
                  />
                  <span className="text-xs leading-tight">{block.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Легенда */}
          <div
            className="absolute bottom-4 left-4 bg-gray-800 rounded-lg p-4"
            style={{ zIndex: 3 }}
          >
            <h4 className="text-sm font-semibold mb-2">Этапы процесса:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                <span>Консультации</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-600 rounded"></div>
                <span>Развитие</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-600 rounded"></div>
                <span>Интервью</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded"></div>
                <span>Результат</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-800">
          <p className="text-gray-300 text-center">
            <span className="text-green-400 font-semibold">
              Персональный подход:
            </span>{" "}
            каждый этап адаптируется под ваши потребности и цели. Ментор
            сопровождает вас от первой консультации до получения оффера.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlowchart;
