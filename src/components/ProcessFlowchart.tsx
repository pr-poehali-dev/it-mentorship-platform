import Icon from "@/components/ui/icon";

const ProcessFlowchart = () => {
  const blocks = [
    // Старт
    {
      id: "start-consultation",
      title: "Старт консультаций",
      category: "start",
      position: { x: 8, y: 45 },
      icon: "Play",
    },

    // Группа: Результативные консультации (синяя рамка)
    {
      id: "first-meeting",
      title: "Первая встреча",
      category: "consultation",
      position: { x: 22, y: 38 },
      icon: "Users",
    },
    {
      id: "weakness-analysis",
      title: "Анализ слабых сторон",
      category: "consultation",
      position: { x: 38, y: 38 },
      icon: "Search",
    },
    {
      id: "individual-plan",
      title: "Индивидуальный план развития",
      category: "development",
      position: { x: 54, y: 25 },
      icon: "BookOpen",
    },
    {
      id: "skill-recommendations",
      title: "Рекомендации по развитию навыков",
      category: "development",
      position: { x: 70, y: 25 },
      icon: "TrendingUp",
    },
    {
      id: "repeat-consultation",
      title: "Повторная консультация",
      category: "consultation",
      position: { x: 80, y: 45 },
      icon: "RotateCcw",
    },

    // Группа: Работа с резюме (бирюзовая рамка)
    {
      id: "resume-analysis",
      title: "Анализ резюме",
      category: "resume",
      position: { x: 74, y: 12 },
      icon: "FileText",
    },
    {
      id: "resume-improvement",
      title: "Улучшение резюме",
      category: "resume",
      position: { x: 86, y: 12 },
      icon: "Edit",
    },
    {
      id: "hr-attract",
      title: "Привлекательность для HR",
      category: "success",
      position: { x: 94, y: 18 },
      icon: "Target",
    },

    // Группа: Подготовка к собеседованиям (фиолетовая рамка)
    {
      id: "mock-interviews",
      title: "Проведение mock-интервью",
      category: "interview",
      position: { x: 74, y: 38 },
      icon: "MessageCircle",
    },
    {
      id: "feedback-analysis",
      title: "Разбор отзывов",
      category: "interview",
      position: { x: 84, y: 32 },
      icon: "MessageSquare",
    },
    {
      id: "stress-testing",
      title: "Стресс-тестирование",
      category: "interview",
      position: { x: 90, y: 38 },
      icon: "Zap",
    },
    {
      id: "interview-feedback",
      title: "Фидбек по интервью",
      category: "success",
      position: { x: 94, y: 45 },
      icon: "CheckCircle",
    },

    // Группа: Поиск вакансий (красная рамка)
    {
      id: "job-search",
      title: "Поиск подходящих вакансий",
      category: "job-search",
      position: { x: 8, y: 72 },
      icon: "Search",
    },
    {
      id: "application-help",
      title: "Помощь с откликами",
      category: "job-search",
      position: { x: 22, y: 72 },
      icon: "Send",
    },

    // Финальный результат (зелёный овал)
    {
      id: "job-readiness",
      title: "Готовность к трудоустройству",
      category: "final",
      position: { x: 60, y: 80 },
      icon: "Award",
    },
  ];

  const connections = [
    // Основной поток от старта
    { from: "start-consultation", to: "first-meeting" },
    { from: "first-meeting", to: "weakness-analysis" },

    // Развитие навыков
    { from: "weakness-analysis", to: "individual-plan" },
    { from: "individual-plan", to: "skill-recommendations" },

    // Циклическая консультация
    { from: "skill-recommendations", to: "repeat-consultation", curved: true },
    { from: "repeat-consultation", to: "weakness-analysis", curved: true },

    // Работа с резюме
    { from: "skill-recommendations", to: "resume-analysis" },
    { from: "resume-analysis", to: "resume-improvement" },
    { from: "resume-improvement", to: "hr-attract" },

    // Подготовка к интервью
    { from: "repeat-consultation", to: "mock-interviews" },
    { from: "mock-interviews", to: "feedback-analysis" },
    { from: "feedback-analysis", to: "stress-testing" },
    { from: "stress-testing", to: "interview-feedback" },

    // Поиск работы
    { from: "start-consultation", to: "job-search" },
    { from: "job-search", to: "application-help" },

    // Финальные соединения
    { from: "application-help", to: "job-readiness" },
    { from: "interview-feedback", to: "job-readiness" },
  ];

  const groups = [
    {
      title: "РЕЗУЛЬТАТИВНЫЕ КОНСУЛЬТАЦИИ",
      color: "border-blue-400",
      position: { x: 16, y: 20, width: 70, height: 40 },
    },
    {
      title: "РАБОТА С РЕЗЮМЕ",
      color: "border-cyan-400",
      position: { x: 70, y: 8, width: 28, height: 15 },
    },
    {
      title: "ПОДГОТОВКА К СОБЕСЕДОВАНИЯМ",
      color: "border-purple-400",
      position: { x: 70, y: 28, width: 28, height: 20 },
    },
    {
      title: "ПОИСК ВАКАНСИЙ",
      color: "border-red-400",
      position: { x: 4, y: 66, width: 25, height: 12 },
    },
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

        <div className="relative bg-gray-900 rounded-2xl p-8 min-h-[700px] overflow-hidden">
          {/* Группы блоков */}
          {groups.map((group, index) => (
            <div
              key={index}
              className={`absolute border-2 rounded-lg ${group.color} bg-black/20`}
              style={{
                left: `${group.position.x}%`,
                top: `${group.position.y}%`,
                width: `${group.position.width}%`,
                height: `${group.position.height}%`,
              }}
            >
              <div className="absolute -top-3 left-2 bg-gray-900 px-2 text-xs font-semibold text-gray-300">
                📋 {group.title}
              </div>
            </div>
          ))}

          {/* SVG для соединительных линий */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {connections.map((connection, index) => {
              const fromBlock = blocks.find((b) => b.id === connection.from);
              const toBlock = blocks.find((b) => b.id === connection.to);
              if (!fromBlock || !toBlock) return null;

              const fromX = fromBlock.position.x;
              const fromY = fromBlock.position.y;
              const toX = toBlock.position.x;
              const toY = toBlock.position.y;

              if (connection.curved) {
                // Изогнутая линия для циклических связей
                const midX = (fromX + toX) / 2;
                const midY = Math.min(fromY, toY) - 8;

                return (
                  <path
                    key={index}
                    d={`M ${fromX}% ${fromY}% Q ${midX}% ${midY}% ${toX}% ${toY}%`}
                    stroke="#6b7280"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                );
              }

              return (
                <line
                  key={index}
                  x1={`${fromX}%`}
                  y1={`${fromY}%`}
                  x2={`${toX}%`}
                  y2={`${toY}%`}
                  stroke="#6b7280"
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
                <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
              </marker>
            </defs>
          </svg>

          {/* Блоки процесса */}
          <div className="relative" style={{ zIndex: 2 }}>
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${getCategoryColor(block.category)} ${
                  block.category === "final"
                    ? "rounded-full px-6 py-4"
                    : "rounded-lg p-3"
                } text-white text-sm font-medium shadow-lg hover:scale-105 transition-transform cursor-pointer max-w-[160px] text-center`}
                style={{
                  left: `${block.position.x}%`,
                  top: `${block.position.y}%`,
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <Icon
                    name={block.icon as any}
                    size={18}
                    className="text-white"
                  />
                  <span className="text-xs leading-tight font-medium">
                    {block.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Легенда */}
          <div
            className="absolute bottom-4 left-4 bg-gray-800 rounded-lg p-4 border border-gray-700"
            style={{ zIndex: 3 }}
          >
            <h4 className="text-sm font-semibold mb-3 text-white">
              Этапы процесса:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-gray-300">Консультации</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-600 rounded"></div>
                <span className="text-gray-300">Развитие</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-600 rounded"></div>
                <span className="text-gray-300">Интервью</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded"></div>
                <span className="text-gray-300">Результат</span>
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
