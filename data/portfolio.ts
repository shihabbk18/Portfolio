export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://shihabbk18.github.io/PORTFOLIO-").replace(
    /\/$/,
    "",
  );

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export const identity = {
  name: "Shihab Bin Kader",
  monogram: "SBK",
  title: "Aspiring AI Researcher & Computer Vision Developer",
  location: "Chattogram, Bangladesh",
  email: "shihabbk18@gmail.com",
  github: "https://github.com/shihabbk18",
  linkedin: "https://www.linkedin.com/in/shihab-bin-kader-a30841409/",
  researchgate: "https://www.researchgate.net/profile/Shihab-Bin-Kader-2",
  cv: withBasePath("/Shihab-Bin-Kader-CV.pdf"),
} as const;

export const navigationItems = [
  { label: "Home", href: "/", section: "home" },
  { label: "About", href: "/about/", section: "about" },
  { label: "Work", href: "/work/", section: "work" },
  { label: "Research", href: "/research/", section: "research" },
  { label: "Contact", href: "/contact/", section: "contact" },
] as const;

export const hero = {
  eyebrow: "Open to graduate research opportunities",
  heading: "Building intelligent systems that can see, understand, and explain.",
  description:
    "I am a Computer Science and Engineering graduate with practical experience in data analysis, computer vision, deep learning, and software development. I build practical AI systems and communicate research findings through clear analysis and technical documentation.",
  orbitLabels: ["Computer Vision", "Explainable AI", "Multimodal Learning"],
} as const;

export const about = {
  copy: "I am a Computer Science and Engineering graduate from East Delta University with practical experience in data analysis, artificial intelligence, computer vision, deep learning, and software development. My undergraduate research explored mango ripeness classification with explainable AI, and my projects span sign-language recognition, driver drowsiness detection, image captioning, and multimodal applications. I contribute to research through literature review, data analysis, interpretation of findings, and manuscript review. I enjoy translating technical problems into structured solutions and communicating results clearly.",
  facts: [
    "Based in Chattogram, Bangladesh",
    "B.Sc. in Computer Science and Engineering",
    "Interested in graduate research opportunities",
  ],
} as const;

export const focusAreas = [
  {
    index: "01",
    title: "Computer Vision",
    short: "Seeing",
    description:
      "Image classification, visual feature extraction, real-time recognition, and transfer learning.",
  },
  {
    index: "02",
    title: "Explainable AI",
    short: "Explaining",
    description:
      "Understanding model decisions through techniques such as Grad-CAM and interpretable visual evidence.",
  },
  {
    index: "03",
    title: "Multimodal Learning",
    short: "Connecting",
    description:
      "Combining visual, textual, and structured data to build more context-aware AI systems.",
  },
  {
    index: "04",
    title: "AI for Real-World Impact",
    short: "Applying",
    description:
      "Developing practical systems for agriculture, accessibility, biomedical applications, and intelligent decision support.",
  },
] as const;

export const research = {
  title:
    "Hybrid Xception-LSTM Model for Explainable Mango Ripeness Classification Using Grad-CAM",
  conference:
    "2025 IEEE 4th International Conference on Robotics, Automation, Artificial Intelligence and Internet-of-Things",
  role: "Co-author",
  contribution:
    "Supported literature review, data analysis, interpretation of results, and manuscript review and revision.",
  summary:
    "The study developed a hybrid Xception-LSTM model to classify mangoes into six ripeness stages using a balanced dataset of 6,000 images. Grad-CAM visualizations were used to examine the image regions that contributed to the model’s decisions.",
  result: "98% accuracy, precision, recall, and F1-score.",
  methodology: [
    "Images",
    "Preprocessing",
    "Xception Features",
    "LSTM",
    "Classification",
    "Grad-CAM",
  ],
} as const;

export const education = {
  university: "East Delta University",
  degree: "Bachelor of Science in Computer Science and Engineering",
  period: "September 2020 – January 2025",
  credits: "162",
  thesis: "Deep Learning-Based Mango Ripeness Classification with Explainable AI",
  coursework: "Artificial Intelligence, Pattern Recognition, Digital Image Processing, Machine Learning, Big Data Analytics, Python Programming",
} as const;

export const additionalResearch = {
  title: "Evaluation of Phytochemical Analysis and In Vitro and In Vivo Pharmacological Activity of Methanol Extract of Hyptis brevipes",
  status: "In review",
  role: "Co-author",
  contribution: "Supported literature review, data organization and analysis, interpretation of findings, and manuscript review and revision.",
} as const;

export const earlierEducation = [
  { institution: "Govt. Hazi Muhammad Mohsin College, Chattogram", qualification: "Higher Secondary Certificate (HSC) - Science", period: "2016-2018" },
  { institution: "Govt. Muslim High School, Chattogram", qualification: "Secondary School Certificate (SSC) - Science", period: "2014-2015" },
] as const;

export const activities = [
  "Executive Member, Computer Club, East Delta University",
  "Community Volunteer, Mayaful, Chattogram - supported educational and social programs for children and community welfare activities.",
] as const;

export const languages = {
  ielts: "IELTS Academic: Overall 7.5 (CEFR C1)",
  scores: "Listening 8.0 · Reading 8.0 · Writing 6.5 · Speaking 7.0",
  proficiency: "Bengali: Native · English: Professional working proficiency",
} as const;

export const recognition = [
  "Dean’s List recognition",
  "East Delta University academic scholarship",
  "IELTS Academic overall band score: 7.5",
] as const;
