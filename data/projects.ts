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

type ProjectEntry = Omit<Project, "number" | "keyResult">;
const repository = (name: string): ProjectLink => ({ label: "View repository", href: `https://github.com/shihabbk18/${name}`, external: true });
const demo = (href: string): ProjectLink => ({ label: "Open live project", href, external: true });

const expandedProjects: ProjectEntry[] = [
  {
    id: "fun-with-flags", title: "Fun with Flags", category: "Android · Educational Games · Offline Software", focus: "Cross-platform learning and local persistence",
    description: "A geography-learning game for Android and the browser, with five game modes, a searchable world atlas, and locally saved results.",
    technologies: ["Java", "Android", "SQLite", "JavaScript", "IndexedDB"],
    keyFacts: ["250 countries, territories, and other places", "Five geography game modes", "Searchable world atlas", "Android SQLite and browser IndexedDB history", "Downloadable result reports", "Offline Android play"],
    problem: "Make geography practice engaging and accessible across Android and the browser, with progress available without an account.",
    approach: "Use a shared country catalog, multiple quiz and matching modes, and platform-specific local storage for scores and result reviews.",
    outcome: "A playable browser release and downloadable Android testing build, with guest play and separate local histories. Account and cloud-sync code requires Firebase setup before activation.",
    visual: "planner", links: [repository("fun-with-flags"), demo("https://shihabbk18.github.io/fun-with-flags/"), { label: "Android releases", href: "https://github.com/shihabbk18/fun-with-flags/releases", external: true }],
  },
  {
    id: "litweaver-ai", title: "LitWeaver AI", category: "Research Tools · Evidence Retrieval · AI", focus: "Traceable scientific literature and claim verification",
    description: "A scientific research assistant for publication discovery and numerical claim checking, with traceable evidence, PDF page references, and explicit abstention.",
    technologies: ["Python", "Streamlit", "Pydantic", "OpenAlex", "Crossref", "PDF Extraction"],
    keyFacts: ["Literature matrices with publication provenance", "DOI-based deduplication", "Numerical consistency checks", "PDF evidence excerpts and page references", "Markdown, CSV, JSON, and BibTeX exports", "Optional bounded LLM controller"],
    problem: "Researchers need to compare literature and inspect numerical claims without losing track of sources or overstating uncertain findings.",
    approach: "Retrieve publication metadata and abstracts, extract PDF evidence, and apply context-aware deterministic checks to comparable numerical claims.",
    outcome: "A research dashboard that separates supported, contradicted, and insufficient-evidence results. Core retrieval and verification operate without an LLM; it does not independently replicate experiments.",
    visual: "model-dna", links: [repository("litweaver-ai")],
  },
  {
    id: "pantrymind-ai", title: "PantryMind AI", category: "Computer Vision · On-device AI · PWA", focus: "Private food recognition and pantry planning",
    description: "An offline-first kitchen website with on-device food-photo recognition, USDA-based nutrition calculations, pantry recipe matching, and a local food diary.",
    technologies: ["JavaScript", "Transformers.js", "CLIP", "Web Workers", "WASM", "Service Workers", "USDA Data"],
    keyFacts: ["Browser-based CLIP food recognition", "Photos remain on the device", "Editable serving assumptions", "Deterministic nutrition calculations", "Quantity-aware recipe matching", "Local diary, favorites, and grocery checklist"],
    problem: "Connect meal photos and pantry ingredients to practical meal planning while preserving photo privacy and making nutrition assumptions visible.",
    approach: "Run a CLIP model in a browser worker, map supported food matches to documented serving templates, and calculate nutrition from USDA ingredient records.",
    outcome: "An installable kitchen website with private photo processing and offline core features after caching. Nutrition estimates depend on assumed portions and ingredients, not image measurements.",
    visual: "portal", links: [repository("PantryMind-AI"), demo("https://shihabbk18.github.io/PantryMind-AI/")],
  },
  {
    id: "optiroute-ai", title: "OptiRoute-AI", category: "Optimization · Networks · Reproducible Research", focus: "QoS-aware routing and mathematical optimization",
    description: "A reproducible flow-level routing simulator comparing Dijkstra routing, capacity-aware greedy admission, and mixed-integer optimization.",
    technologies: ["Python", "SciPy", "HiGHS", "MILP", "Streamlit", "JavaScript"],
    keyFacts: ["Weighted network topologies", "Capacity and priority-latency constraints", "Three routing methods", "Seeded reproducible experiments", "Downloadable scenarios and measurements", "Browser explorer for saved solver results"],
    problem: "Explore the tradeoffs between simple routing and constrained resource allocation when links have limited capacity and priority traffic has latency requirements.",
    approach: "Generate flow demands, construct candidate paths, and compare shortest-path routing, greedy reservations, and a binary optimization model using measured experiments.",
    outcome: "A Python simulator and browser results explorer. The browser displays saved runs; live optimization runs in Streamlit. This educational model contains no machine learning or packet-level network deployment.",
    visual: "model-dna", links: [repository("optiroute-ai"), demo("https://shihabbk18.github.io/optiroute-ai/")],
  },
  {
    id: "mediguide-bd", title: "MediGuide BD", category: "Health Informatics · Bilingual UX · Evidence Retrieval", focus: "Cited medication instructions in Bangla and English",
    description: "A bilingual Bangladesh medication-information website that maps local brands to formulations and displays cited administration guidance when reviewed evidence exists.",
    technologies: ["React", "TypeScript", "Vite", "Zod", "Python", "Web Workers"],
    keyFacts: ["English and Bangla guidance", "Formulation-aware brand search", "Source provenance", "Independent identity and guidance datasets", "Explicit abstention for missing evidence", "Data validation and review pipeline"],
    problem: "Help people understand an existing prescription without guessing administration instructions from an uncertain brand or formulation match.",
    approach: "Normalize product identities, confirm ingredient/form/route/release keys, and serve reviewed bilingual guidance with source references or an explicit abstention.",
    outcome: "A searchable medication-information website with a reproducible data pipeline. Coverage is limited and it does not diagnose, prescribe, or generate patient-specific dosing.",
    visual: "medsafe", links: [repository("mediguide-bd"), demo("https://shihabbk18.github.io/mediguide-bd/")],
  },
  {
    id: "face-skin-lens", title: "FaceSkin Lens", category: "Computer Vision · Explainability · Research Prototype", focus: "Face-image quality checks and interpretable research signals",
    description: "A face-only skin pre-screening research scaffold with immediate image-quality checks and a small SCIN-derived prototype model with patch heatmaps.",
    technologies: ["JavaScript", "Python", "SCIN", "Image Processing", "Centroid Classification"],
    keyFacts: ["Face-image scope", "Browser image-quality checks", "Real-data prototype model", "Patch-based visual explanations", "SCIN filtering and training scripts"],
    problem: "Explore transparent facial-image screening workflows while clearly separating a research prototype from a clinically validated system.",
    approach: "Filter a bounded real SCIN sample, train a lightweight centroid model, and expose quality checks, research signals, and patch heatmaps in the browser.",
    outcome: "An explainability-focused research scaffold. The small prototype is not clinically reliable and is not a diagnostic tool.",
    visual: "model-dna", links: [repository("skin-xai-screener")],
  },
  {
    id: "drowsiness-ai", title: "Drowsiness Detection AI", category: "Computer Vision · Deep Learning · Streamlit", focus: "Eye-state classification from uploaded or captured images",
    description: "A Streamlit computer-vision application that uses a Keras model to classify open and closed eyes from an uploaded image or camera photograph.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Streamlit"],
    keyFacts: ["Image upload and camera capture", "128 × 128 image preprocessing", "Open-eye and closed-eye classes", "Keras model inference"],
    problem: "Demonstrate an approachable image-classification workflow for eye-state signals related to driver-alertness research.",
    approach: "Resize and normalize an input photograph, run the saved Keras model, and display the predicted eye-state class in Streamlit.",
    outcome: "An image-based classification demonstration. It does not establish continuous driver monitoring or validated road-safety performance.",
    visual: "sign", links: [repository("drowsiness-ai")],
  },
  {
    id: "multimodal-ai", title: "Multimodal AI App", category: "Multimodal AI · NLP · Prototyping", focus: "Image, document, and conversational workflows",
    description: "A Streamlit prototype combining image descriptions, PDF-text questions, and a conversational interface in a tabbed workspace.",
    technologies: ["Python", "Streamlit", "Hugging Face Transformers", "Pillow", "PDF Processing"],
    keyFacts: ["Image upload and description", "PDF text extraction", "Questions over extracted document text", "Separate chat tab"],
    problem: "Bring common image, document, and text interactions together in a simple interface for exploring multimodal application design.",
    approach: "Organize image, PDF, and chat workflows into tabs, with separate utility modules for describing images, extracting PDF text, and answering prompts.",
    outcome: "A compact portfolio prototype for experimenting with multiple AI interaction modes, without claiming a production retrieval or document-verification system.",
    visual: "portal", links: [repository("multimodal-ai")],
  },
  {
    id: "image-caption-generator", title: "Image Caption Generator", category: "Computer Vision · Language Generation", focus: "Connecting image features to natural-language captions",
    description: "A deep-learning image-captioning project documenting an InceptionV3 feature-extraction and LSTM caption-generation workflow using Flickr8k.",
    technologies: ["Python", "InceptionV3", "LSTM", "Flickr8k", "Streamlit"],
    keyFacts: ["Image-to-caption workflow", "CNN visual feature extraction", "LSTM sequence generation", "Flickr8k-based project"],
    problem: "Explore how visual representations can be translated into a natural-language description of an image.",
    approach: "Use a CNN for visual features and an LSTM for caption sequences, following the training and interface workflow described in the repository.",
    outcome: "An image-captioning portfolio project documenting the connection between computer vision and sequence generation. No benchmark accuracy is claimed.",
    visual: "sign", links: [repository("image-caption-generator")],
  },
  {
    id: "movie-data-analysis", title: "Movie Data Analysis", category: "Data Analysis · Visualization", focus: "Exploratory analysis of movie trends and ratings",
    description: "A Python exploratory-data-analysis project for cleaning movie data, inspecting genre distributions, and visualizing rating trends.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    keyFacts: ["Data cleaning", "Exploratory analysis", "Genre distributions", "Rating visualizations"],
    problem: "Turn movie records into clear, inspectable summaries of genres and audience-rating patterns.",
    approach: "Clean and explore the data with Pandas, then communicate patterns using Matplotlib and Seaborn visualizations.",
    outcome: "A data-analysis project presenting genre and rating observations through reproducible Python exploration.",
    visual: "planner", links: [repository("movie-data-analysis")],
  },
  {
    id: "star-chicken", title: "Star Chicken Albi", category: "Web Development · Bilingual UX", focus: "A responsive restaurant website in French and English",
    description: "A bilingual restaurant website presenting food photography, menu information, directions, and links to external delivery platforms.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vinext", "Vercel"],
    keyFacts: ["French and English interface", "Responsive restaurant presentation", "Food photography and menu information", "Saved language preference", "External delivery links"],
    problem: "Give restaurant visitors a clear mobile-friendly way to explore the menu, find the location, and reach delivery services.",
    approach: "Build a bilingual React interface with a static HTML export, responsive visuals, and locally saved language preferences.",
    outcome: "A deployed restaurant website. Ordering and checkout are handled by the linked delivery platforms rather than a custom order-processing backend.",
    visual: "planner", links: [repository("Star-Chicken"), demo("https://starchicken.vercel.app")],
  },
];

projects.push(...expandedProjects.map((project, index) => ({ ...project, number: String(index + 6).padStart(2, "0"), keyResult: project.outcome })));

export const featuredProjectIds = ["gesturecam-fx", "litweaver-ai", "fun-with-flags"] as const;
export const featuredProjects = featuredProjectIds.map((id) => projects.find((project) => project.id === id)!);

export function projectTrack(project: Project): string {
  if (["gesturecam-fx", "model-dna", "sign-sense", "pantrymind-ai", "face-skin-lens", "drowsiness-ai", "image-caption-generator"].includes(project.id)) return "Computer vision";
  if (["litweaver-ai", "startup-pilot-ai", "multimodal-ai"].includes(project.id)) return "AI & research";
  if (["medsafe-lens", "mediguide-bd"].includes(project.id)) return "Health informatics";
  if (["optiroute-ai", "movie-data-analysis"].includes(project.id)) return "Data & optimization";
  return "Apps & web";
}

// All former additional projects now have full entries and generated case studies.
export const additionalProjects: { title: string; description: string }[] = [];
