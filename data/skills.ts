export type SkillGroup = {
  title: string;
  index: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    index: "01",
    skills: ["Python", "Java", "C", "C++", "R", "SQL"],
  },
  {
    title: "AI and Deep Learning",
    index: "02",
    skills: [
      "Convolutional Neural Networks",
      "Machine Learning",
      "Computer Vision",
      "Xception",
      "LSTM",
      "Hybrid CNN-RNN Models",
      "Transfer Learning",
      "Image Classification",
      "Explainable AI",
      "Grad-CAM",
    ],
  },
  {
    title: "Frameworks and Tools",
    index: "03",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Git",
      "GitHub",
      "OpenCV",
      "MySQL",
      "PostgreSQL",
      "Pandas",
      "NumPy",
      "Docker",
      "Streamlit",
      "FastAPI",
      "Android Studio",
    ],
  },
  {
    title: "Web, Data & Office",
    index: "04",
    skills: ["HTML", "CSS", "Excel", "Power BI", "Word", "PowerPoint"],
  },
];
