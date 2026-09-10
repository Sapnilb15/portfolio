import { ArrowDownRight, ArrowUpRight, CodeXml, Download, Mail, MapPin } from 'lucide-react';

// Add screenshots to public/projects, then set image to '/projects/your-file.png'.
const projects = [
  {
    number: '01',
    title: 'Before I Deploy',
    category: 'Developer security tool',
    description: 'A read-only Python scanner that catches risky Django deployment settings and potential hardcoded credentials without importing, executing, or uploading source code.',
    result: 'AST-based rules · redacted reports · deterministic exit codes',
    tech: ['Python', 'AST', 'Security', 'CLI'],
    href: 'https://github.com/Sapnilb15/before-i-deploy',
    image: '/projects/before-i-deploy.png',
  },
  {
    number: '02',
    title: 'LlamaIndex RAG',
    category: 'Retrieval-augmented generation',
    description: 'A locally grounded assistant over LlamaIndex source, documentation, and resolved issues with transparent citations and hybrid relevance scoring.',
    result: '8,440 chunks · dense retrieval · cross-encoder reranking',
    tech: ['FastAPI', 'Qdrant', 'Ollama', 'Streamlit'],
    href: 'https://github.com/Sapnilb15/llamaindex-rag',
    image: '/projects/llamaindex-rag.png',
  },
  {
    number: '03',
    title: 'Construction MCDM',
    category: 'Decision intelligence',
    description: 'An Excel-driven decision engine that derives criteria weights with AHP, ranks alternatives with TOPSIS, and cross-checks results with SAW.',
    result: 'Consistency checks · explainable rankings · reusable workbooks',
    tech: ['Python', 'AHP', 'TOPSIS', 'Excel'],
    href: 'https://github.com/Sapnilb15/mcdm-app',
    image: '/projects/construction-mcdm.png',
  },
  {
    number: '04',
    title: 'Bill Agent',
    category: 'Agentic finance interface',
    description: 'An AI subscription shield that scans transaction CSVs for price hikes, duplicate services, and forgotten recurring charges.',
    result: 'Actionable findings · savings estimates · negotiation prompts',
    tech: ['Next.js', 'TypeScript', 'CopilotKit', 'Motion'],
    href: 'https://github.com/Sapnilb15/Bill-Agent',
    image: '/projects/bill-agent.png',
  },
  {
    number: '05',
    title: 'CharityGuard',
    category: 'Trust and verification',
    description: 'A charity verifier that combines IRS registration, financial health, scam-language signals, domain age, and disaster-exploitation checks.',
    result: 'Multi-signal trust score · explainable risk flags',
    tech: ['FastAPI', 'Python', 'ProPublica API', 'NLP'],
    href: 'https://github.com/Sapnilb15/charityguard-api',
    image: '/projects/charityguard.png',
  },
  {
    number: '06',
    title: 'Shaktiman',
    category: 'AI fitness tracker',
    description: 'A team-built fitness assistant for body metrics, progress, workouts, and personalized diet recommendations. I designed and implemented the workout library experience.',
    result: 'Workout UI · exercise API schema · responsive visual library',
    tech: ['React', 'Django REST', 'PostgreSQL', 'JWT'],
    href: 'https://github.com/Sapnilb15/AI-fitness-tracker',
    image: '/projects/shaktiman.png',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sapnil Basnet, home"><span>SB</span><strong>Sapnil Basnet</strong></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a className="header-contact" href="/Sapnil-Basnet-Resume.pdf">Résumé <Download size={15} aria-hidden="true" /></a>
      </header>

      <section className="hero" id="top">
        <img src="/nepal-horizon.png" alt="An illustrated Himalayan horizon at sunrise" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <h1>Sapnil Basnet</h1>
          <p className="hero-intro">A computer science student and developer turning complex systems into useful, trustworthy tools.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <ArrowDownRight size={18} /></a>
            <a className="button ghost" href="/Sapnil-Basnet-Resume.pdf">View résumé</a>
          </div>
        </div>
        <div className="hero-footer">
          <span>Undergraduate Research Assistant · Texas State University</span>
          <a href="https://github.com/Sapnilb15" target="_blank" rel="noreferrer"><CodeXml size={17} /> GitHub</a>
          <a href="mailto:sapnilb15@gmail.com"><Mail size={17} /> Email</a>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-intro">
          <div><p className="section-kicker">Selected work · 2025-2026</p><h2>Systems built to make difficult decisions feel simple.</h2></div>
          <p>Security, retrieval, decision science, personal finance, public trust, and health. Each project starts with a messy real-world problem and ends with an interface people can act on.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              {project.image ? <div className="project-image"><img src={project.image} alt={`${project.title}: ${project.category} concept illustration`} loading="lazy" /></div> : <div className="project-image empty" aria-label={`${project.title} image area`}><span>{project.title}</span></div>}
              <div className="project-copy">
                <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>{project.result}</strong>
                <div className="project-bottom"><div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={21} /></a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-heading"><h2>About me</h2></div>
        <div className="about-copy">
          <p>I&apos;m majoring in Computer Science with a minor in Data Analytics at Texas State University. My background combines undergraduate research with hands-on experience in full-stack development and artificial intelligence. I enjoy applying what I learn to practical problems and building software that people find useful.</p>
        </div>
      </section>

      <section className="experience-section" aria-label="Experience">
        <div className="timeline">
          <h2>Experience</h2>
          <article><time>2025-2026</time><div><h3>Undergraduate Research Assistant</h3><p>Transformer-Based Light Field Salient Object Detection and Its Application to Autofocus Using ConvNeXt</p></div></article>
          <article><time>2026</time><div><h3>Undergraduate Research Assistant</h3><p>Sustainable and Cost-Effective Optimization of Concrete Mixtures with Equivalent Strength Using Neural Networks and Differential Evolution</p></div></article>
          <article><time>2021-2023</time><div><h3>IT Technician</h3><p>Nepal Red Cross Society</p><p>Developed and maintained websites, managed data entry, and supported hardware functionality.</p></div></article>
        </div>
      </section>

      <section className="skills-section" id="skills" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills</h2>
        <div className="skill-groups">
          {[
            { title: 'Languages', items: ['Python', 'Java', 'C++', 'C', 'MATLAB'] },
            { title: 'AI and machine learning', items: ['PyTorch', 'OpenCV', 'LangChain', 'LangGraph', 'RAG Systems', 'LLMs', 'Agentic AI', 'Generative AI'] },
            { title: 'Web and data', items: ['React', 'Django', 'FastAPI', 'PostgreSQL'] },
            { title: 'Tools and platforms', items: ['n8n', 'Docker', 'Git', 'AWS', 'GitKraken'] },
          ].map(group => <div key={group.title}><h3>{group.title}</h3><ul>{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-pattern" aria-hidden="true" />
        <p className="eyebrow">Have a problem worth solving?</p>
        <h2>Let&apos;s build something<br /><em>useful together.</em></h2>
        <div className="footer-links">
          <a href="mailto:sapnilb15@gmail.com">sapnilb15@gmail.com <ArrowUpRight size={18} /></a>
          <a href="https://www.linkedin.com/in/sapnil-basnet-342a3425b" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18} /></a>
          <a href="https://github.com/Sapnilb15" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={18} /></a>
          <a href="/Sapnil-Basnet-Resume.pdf">Résumé <Download size={18} /></a>
        </div>
        <div className="footer-base"><span><MapPin size={15} /> Texas, USA</span><span>© 2026 Sapnil Basnet</span></div>
      </footer>
    </main>
  );
}
