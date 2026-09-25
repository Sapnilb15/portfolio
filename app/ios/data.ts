// Content for the iOS-style portfolio. Mirrors the classic site in app/page.tsx.
export const projects = [
  {
    title: 'Before I Deploy',
    category: 'Developer security tool',
    description: 'A read-only Python scanner that catches risky Django deployment settings and potential hardcoded credentials without importing, executing, or uploading source code.',
    result: 'AST-based rules · redacted reports · deterministic exit codes',
    tech: ['Python', 'AST', 'Security', 'CLI'],
    href: 'https://github.com/Sapnilb15/before-i-deploy',
    image: '/projects/before-i-deploy.png',
  },
  {
    title: 'LlamaIndex RAG',
    category: 'Retrieval-augmented generation',
    description: 'A locally grounded assistant over LlamaIndex source, documentation, and resolved issues with transparent citations and hybrid relevance scoring.',
    result: '8,440 chunks · dense retrieval · cross-encoder reranking',
    tech: ['FastAPI', 'Qdrant', 'Ollama', 'Streamlit'],
    href: 'https://github.com/Sapnilb15/llamaindex-rag',
    image: '/projects/llamaindex-rag.png',
  },
  {
    title: 'Construction MCDM',
    category: 'Decision intelligence',
    description: 'An Excel-driven decision engine that derives criteria weights with AHP, ranks alternatives with TOPSIS, and cross-checks results with SAW.',
    result: 'Consistency checks · explainable rankings · reusable workbooks',
    tech: ['Python', 'AHP', 'TOPSIS', 'Excel'],
    href: 'https://github.com/Sapnilb15/mcdm-app',
    image: '/projects/construction-mcdm.png',
  },
  {
    title: 'Bill Agent',
    category: 'Agentic finance interface',
    description: 'An AI subscription shield that scans transaction CSVs for price hikes, duplicate services, and forgotten recurring charges.',
    result: 'Actionable findings · savings estimates · negotiation prompts',
    tech: ['Next.js', 'TypeScript', 'CopilotKit', 'Motion'],
    href: 'https://github.com/Sapnilb15/Bill-Agent',
    image: '/projects/bill-agent.png',
  },
  {
    title: 'CharityGuard',
    category: 'Trust and verification',
    description: 'A charity verifier that combines IRS registration, financial health, scam-language signals, domain age, and disaster-exploitation checks.',
    result: 'Multi-signal trust score · explainable risk flags',
    tech: ['FastAPI', 'Python', 'ProPublica API', 'NLP'],
    href: 'https://github.com/Sapnilb15/charityguard-api',
    image: '/projects/charityguard.png',
  },
  {
    title: 'Shaktiman',
    category: 'AI fitness tracker',
    description: 'A team-built fitness assistant for body metrics, progress, workouts, and personalized diet recommendations. I designed and implemented the workout library experience.',
    result: 'Workout UI · exercise API schema · responsive visual library',
    tech: ['React', 'Django REST', 'PostgreSQL', 'JWT'],
    href: 'https://github.com/Sapnilb15/AI-fitness-tracker',
    image: '/projects/shaktiman.png',
  },
];

export const experience = [
  { time: '2025-2026', role: 'Undergraduate Research Assistant', org: 'Texas State University', detail: 'Transformer-Based Light Field Salient Object Detection and Its Application to Autofocus Using ConvNeXt' },
  { time: '2026', role: 'Undergraduate Research Assistant', org: 'Texas State University', detail: 'Sustainable and Cost-Effective Optimization of Concrete Mixtures with Equivalent Strength Using Neural Networks and Differential Evolution' },
  { time: '2021-2023', role: 'IT Technician', org: 'Nepal Red Cross Society', detail: 'Developed and maintained websites, managed data entry, and supported hardware functionality.' },
];

export const skills = [
  { title: 'Languages', items: ['Python', 'Java', 'C++', 'C', 'MATLAB'] },
  { title: 'AI and machine learning', items: ['PyTorch', 'OpenCV', 'LangChain', 'LangGraph', 'RAG Systems', 'LLMs', 'Agentic AI', 'Generative AI'] },
  { title: 'Web and data', items: ['React', 'Django', 'FastAPI', 'PostgreSQL'] },
  { title: 'Tools and platforms', items: ['n8n', 'Docker', 'Git', 'AWS', 'GitKraken'] },
];

export const links = {
  email: 'sapnilb15@gmail.com',
  github: 'https://github.com/Sapnilb15',
  linkedin: 'https://www.linkedin.com/in/sapnil-basnet-342a3425b',
  resume: '/Sapnil-Basnet-Resume.pdf',
};
