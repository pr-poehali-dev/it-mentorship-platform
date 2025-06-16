import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MentorsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все", icon: "Users" },
    { id: "backend", name: "Backend", icon: "Server" },
    { id: "frontend", name: "Frontend", icon: "Monitor" },
    { id: "qa", name: "QA", icon: "Bug" },
    { id: "data", name: "Data Science", icon: "BarChart3" },
    { id: "mobile", name: "Mobile", icon: "Smartphone" },
  ];

  const mentors = [
    {
      name: "Алексей",
      role: "Team Lead",
      experience: "10+ лет в backend",
      category: "backend",
      specialization: "Помогает с архитектурой",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Анна",
      role: "HR в FAANG",
      experience: "5+ лет в найме",
      category: "hr",
      specialization: "Готовит к собеседованиям",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Максим",
      role: "Data Analyst",
      experience: "6+ лет в аналитике",
      category: "data",
      specialization: "Учит строить дашборды",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Екатерина",
      role: "Senior Frontend",
      experience: "7+ лет в React",
      category: "frontend",
      specialization: "Современные фреймворки",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Дмитрий",
      role: "QA Lead",
      experience: "8+ лет в тестировании",
      category: "qa",
      specialization: "Автоматизация тестов",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "София",
      role: "iOS Developer",
      experience: "5+ лет в мобайле",
      category: "mobile",
      specialization: "Swift и SwiftUI",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const filteredMentors =
    activeCategory === "all"
      ? mentors
      : mentors.filter((mentor) => mentor.category === activeCategory);

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
          Наши менторы
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              <Icon name={category.icon as any} size={16} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredMentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-purple-500 transition-all group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{mentor.name}</h3>
                  <p className="text-purple-400">{mentor.role}</p>
                  <p className="text-sm text-gray-400">{mentor.experience}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                <Icon
                  name="ArrowRight"
                  size={16}
                  className="inline mr-2 text-purple-400"
                />
                {mentor.specialization}
              </p>

              <Button
                size="sm"
                variant="outline"
                className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white group-hover:bg-purple-500 group-hover:text-white"
              >
                Связаться
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
          >
            Показать всех менторов
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorsGallery;
