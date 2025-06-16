import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MentorDirectory = () => {
  const [activeSpecialization, setActiveSpecialization] = useState("all");

  const specializations = [
    { id: "all", name: "Все", icon: "Users" },
    { id: "java", name: "Java", icon: "Coffee" },
    { id: "python", name: "Python", icon: "Bot" },
    { id: "javascript", name: "JavaScript", icon: "Globe" },
    { id: "qa", name: "QA", icon: "Bug" },
    { id: "devops", name: "DevOps", icon: "Settings" },
  ];

  const mentors = [
    {
      name: "Александр К.",
      specialization: "java",
      experience: "12+ лет",
      company: "Senior в Яндексе",
      techStack: ["Java", "Spring", "Microservices", "Kafka"],
      achievements: [
        "Ведет команду из 15 разработчиков",
        "Архитектор высоконагруженных систем",
      ],
      projects: "20+ проектов в финтехе",
    },
    {
      name: "Мария С.",
      specialization: "python",
      experience: "8+ лет",
      company: "Tech Lead в Сбере",
      techStack: ["Python", "Django", "PostgreSQL", "Redis"],
      achievements: ["Автор внутренних библиотек", "Спикер на PyCon Russia"],
      projects: "Банковские системы, аналитика",
    },
    {
      name: "Игорь Н.",
      specialization: "javascript",
      experience: "9+ лет",
      company: "Frontend Architect в VK",
      techStack: ["React", "TypeScript", "Next.js", "GraphQL"],
      achievements: [
        "Оптимизировал производительность на 40%",
        "Создал design system",
      ],
      projects: "Социальные сети, e-commerce",
    },
    {
      name: "Елена П.",
      specialization: "qa",
      experience: "7+ лет",
      company: "QA Lead в Авито",
      techStack: ["Selenium", "TestNG", "Allure", "Docker"],
      achievements: [
        "Построила процесс автотестирования с нуля",
        "Сократила время тестирования в 3 раза",
      ],
      projects: "Marketplace, мобильные приложения",
    },
    {
      name: "Дмитрий В.",
      specialization: "devops",
      experience: "10+ лет",
      company: "DevOps Engineer в Mail.ru",
      techStack: ["Kubernetes", "AWS", "Terraform", "Ansible"],
      achievements: [
        "Мигрировал инфраструктуру в облако",
        "Автоматизировал CI/CD для 50+ проектов",
      ],
      projects: "Высоконагруженные системы",
    },
    {
      name: "Анна Л.",
      specialization: "python",
      experience: "6+ лет",
      company: "Data Engineer в Тинькофф",
      techStack: ["Python", "Apache Spark", "Airflow", "ClickHouse"],
      achievements: ["Обрабатывает 1TB данных в день", "Создала ML pipeline"],
      projects: "Финтех, аналитика рисков",
    },
  ];

  const filteredMentors =
    activeSpecialization === "all"
      ? mentors
      : mentors.filter(
          (mentor) => mentor.specialization === activeSpecialization,
        );

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
            Каталог менторов
          </h2>
          <p className="text-xl text-gray-300">
            Менторы назначаются после заключения договора
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {specializations.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setActiveSpecialization(spec.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                activeSpecialization === spec.id
                  ? "bg-[#9b87f5] text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              <Icon name={spec.icon as any} size={16} />
              <span>{spec.name}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {filteredMentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-[#9b87f5] transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl text-[#9b87f5]">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-300">{mentor.company}</p>
                  <p className="text-sm text-gray-400">{mentor.experience}</p>
                </div>
                <div className="text-right">
                  <span className="bg-[#9b87f5]/20 text-[#9b87f5] px-3 py-1 rounded-full text-sm">
                    {
                      specializations.find(
                        (s) => s.id === mentor.specialization,
                      )?.name
                    }
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-200">
                  Технологии:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-200">
                  Достижения:
                </h4>
                <ul className="space-y-1">
                  {mentor.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2 text-sm text-gray-300"
                    >
                      <Icon
                        name="Check"
                        size={14}
                        className="text-green-400 mt-0.5 flex-shrink-0"
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-gray-400">
                <Icon
                  name="Briefcase"
                  size={16}
                  className="inline mr-2 text-[#9b87f5]"
                />
                {mentor.projects}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-900 border border-[#9b87f5]/30 rounded-lg p-6">
            <Icon
              name="Lock"
              size={24}
              className="text-[#9b87f5] mx-auto mb-3"
            />
            <h3 className="font-bold mb-2">Доступ после договора</h3>
            <p className="text-gray-300 text-sm">
              Менторы из каталога назначаются индивидуально после заключения
              договора на менторство
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorDirectory;
