export type ProjectLink = {
  label: string;
  href: string;
  external: boolean;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  focus: string;
  technologies: string[];
  keyFacts: string[];
  keyResult: string;
  problem: string;
  approach: string;
  outcome: string;
  visual: "portal" | "planner" | "model-dna" | "sign" | "medsafe";
  links: ProjectLink[];
  disclaimer?: string;
};

export const projects: Project[] = [
  {
    id: "gesturecam-fx",
    number: "01",
    title: "GestureCam FX",
    category: "Computer Vision · Gesture Interaction · WebGL",
    description:
      "A real-time augmented-reality hand-gesture experience where users create an interactive portal with hand pinches and cycle through procedurally generated 3D models.",
    focus: "Real-time gesture interaction",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "MediaPipe Hands",
      "Three.js",
      "WebGL",
      "Canvas",
      "GitHub Pages",
    ],
    keyFacts: [
      "Real-time two-hand tracking",
      "MediaPipe hand landmarks",
      "Pinch-gesture detection",
      "Procedural Three.js models",
      "Particle disintegration and rematerialization",
      "Camera, mouse, touch, and keyboard controls",
      "Responsive desktop and mobile interface",
      "Browser-based processing",
    ],
    keyResult:
      "A browser-based gesture experience with responsive, multimodal controls.",
    problem:
      "Turn natural hand movement into an expressive, responsive augmented-reality interaction in the browser.",
    approach:
      "Track two hands with MediaPipe, detect pinch gestures, and connect those signals to a procedural Three.js portal and particle system.",
    outcome:
      "An interactive experience that supports camera, mouse, touch, and keyboard input across desktop and mobile interfaces.",
    visual: "portal",
    links: [
      {
        label: "View repository",
        href: "https://github.com/shihabbk18/gesturecam-fx",
        external: true,
      },
      {
        label: "Launch live experience",
        href: "https://shihabbk18.github.io/gesturecam-fx/",
        external: true,
      },
    ],
  },
  {
    id: "startup-pilot-ai",
    number: "02",
    title: "StartupPilot AI",
    category: "AI Agent · SaaS · Research and Planning Automation",
    description:
      "A production-oriented AI platform designed to transform an early startup idea into a structured MVP and business-development plan.",
    focus: "AI-assisted startup planning",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "OpenAI API",
      "SQLAlchemy",
      "Tailwind CSS",
    ],
    keyFacts: [
      "Startup problem and audience analysis",
      "Market and competitor analysis",
      "Business Model Canvas and Lean Canvas",
      "MVP feature planning",
      "Roadmap and sprint generation",
      "Architecture and database planning",
      "Investor-readiness support",
      "Document upload and local retrieval workflow",
      "AI-generated planning outputs",
    ],
    keyResult:
      "Structured planning outputs that connect an initial idea to an actionable MVP path.",
    problem:
      "Early startup ideas often arrive without a connected view of their audience, market, product, architecture, and delivery plan.",
    approach:
      "Use AI-assisted analysis and local document retrieval to organize the idea into linked business, product, technical, and investor-readiness modules.",
    outcome:
      "A production-oriented planning platform that generates canvases, MVP scope, architecture guidance, roadmaps, and sprint plans without claiming a commercial deployment.",
    visual: "planner",
    links: [
      {
        label: "View repository",
        href: "https://github.com/shihabbk18/startup-pilot-ai",
        external: true,
      },
    ],
  },
  {
    id: "model-dna",
    number: "03",
    title: "ModelDNA",
    category: "Explainable AI · Model Inspection",
    description:
      "An explainable-AI toolkit for examining neural-network predictions through Grad-CAM visualizations and confidence analysis.",
    focus: "Prediction inspection and visual evidence",
    technologies: [
      "Python",
      "PyTorch",
      "Streamlit",
      "OpenCV",
      "ResNet18",
      "Grad-CAM",
    ],
    keyFacts: [
      "Image classification with pretrained ResNet18",
      "Grad-CAM heatmaps",
      "Prediction-confidence analysis",
      "Neural-attention inspection",
      "Interactive Streamlit interface",
    ],
    keyResult:
      "A visual inspection workflow for predictions, confidence, and model attention.",
    problem:
      "Image-classification outputs can be difficult to assess when predictions are separated from confidence and visual evidence.",
    approach:
      "Run images through a pretrained ResNet18, calculate prediction confidence, and surface influential regions through Grad-CAM in Streamlit.",
    outcome:
      "An interactive explainability toolkit that makes model attention and classification confidence easier to inspect.",
    visual: "model-dna",
    links: [
      {
        label: "View repository",
        href: "https://github.com/shihabbk18/ModelDNA",
        external: true,
      },
    ],
  },
  {
    id: "sign-sense",
    number: "04",
    title: "Sign Sense",
    category: "Computer Vision · Accessibility",
    description:
      "A real-time American Sign Language recognition project covering 29 classes using deep learning, image processing, and live video input.",
    focus: "Accessibility-focused computer vision",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    keyFacts: [
      "Real-time ASL recognition",
      "29 American Sign Language classes",
      "CNN-based prediction",
      "Computer-vision accessibility",
      "Python-based implementation",
    ],
    keyResult:
      "A live-video recognition workflow for American Sign Language input.",
    problem:
      "Interpret American Sign Language input from a live camera stream with an approachable computer-vision interface.",
    approach:
      "Process live video with OpenCV and classify sign input with a TensorFlow and Keras convolutional neural network.",
    outcome:
      "A Python-based real-time ASL recognition project focused on accessibility, with no undocumented accuracy claim.",
    visual: "sign",
    links: [
      {
        label: "View repository",
        href: "https://github.com/shihabbk18/sign-sense",
        external: true,
      },
    ],
  },
  {
    id: "medsafe-lens",
    number: "05",
    title: "MedSafe Lens",
    category: "Health Informatics · Evidence Retrieval",
    description:
      "A medicine-safety review assistant that organizes a medicine list into a traceable evidence brief using public medicine-label data.",
    focus: "Traceable public-label evidence retrieval",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "RxNorm API",
      "openFDA API",
      "Progressive Web App",
    ],
    keyFacts: [
      "Accepts multiple medicine names",
      "Captures relevant patient context",
      "Normalizes medicine names using RxNorm",
      "Retrieves public openFDA drug-label information",
      "Extracts warnings, contraindications, and other label sections",
      "Creates traceable evidence cards",
      "Provides medicine-specific review questions",
      "Supports progressive-web-app behavior",
    ],
    keyResult:
      "Traceable medicine-label evidence cards with source indicators and focused review questions.",
    problem:
      "Medicine lists and patient context can be difficult to organize into a source-aware brief for an informed safety conversation.",
    approach:
      "Normalize medicine names with RxNorm, retrieve public openFDA label sections, and organize warnings, contraindications, and questions into traceable evidence cards.",
    outcome:
      "An informational progressive web app that structures public-label evidence without providing diagnosis or replacing clinical judgment.",
    visual: "medsafe",
    links: [
      {
        label: "View repository",
        href: "https://github.com/shihabbk18/medicine-safety-checker",
        external: true,
      },
    ],
    disclaimer:
      "This project is an informational review assistant, not a medical device, diagnosis tool, or replacement for professional clinical judgment.",
  },
];

export const additionalProjects = [
  { title: "Drowsiness Detection AI", description: "A real-time computer-vision system to identify signs of driver drowsiness." },
  { title: "Image Caption Generator", description: "A deep-learning application for image understanding and natural-language generation." },
  { title: "Multimodal AI Application", description: "Combines information from multiple data modalities for prediction and analysis." },
  { title: "Fun with Flags", description: "An Android application for interactive flag recognition and learning." },
] as const;
