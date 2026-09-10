import { ArrowDownRight, ArrowUpRight, CodeXml, Download, Mail, MapPin } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Before I Deploy',
    category: 'Developer security tool',
    description: 'A read-only Python scanner that catches risky Django deployment settings and potential hardcoded credentials—without importing, executing, or uploading source code.',
    result: 'AST-based rules · redacted reports · deterministic exit codes',
    tech: ['Python', 'AST', 'Security', 'CLI'],
    href: 'https://github.com/Sapnilb15/before-i-deploy',
    tone: 'red',
    preview: ['DJG001  DEBUG = True', 'SEC002  Potential secret', 'SCAN COMPLETE  41 tests'],
  },
  {
    number: '02',
    title: 'LlamaIndex RAG',
    category: 'Retrieval-augmented generation',
    description: 'A locally grounded assistant over LlamaIndex source, documentation, and resolved issues with transparent citations and hybrid relevance scoring.',
    result: '8,440 chunks · dense retrieval · cross-encoder reranking',
    tech: ['FastAPI', 'Qdrant', 'Ollama', 'Streamlit'],
    href: 'https://github.com/Sapnilb15/llamaindex-rag',
    tone: 'blue',
    preview: ['QUERY  How does retrieval work?', 'RERANK  20 → 5 sources', 'ANSWER  grounded + auditable'],
  },
  {
    number: '03',
    title: 'Construction MCDM',
    category: 'Decision intelligence',
    description: 'An Excel-driven decision engine that derives criteria weights with AHP, ranks alternatives with TOPSIS, and cross-checks results with SAW.',
    result: 'Consistency checks · explainable rankings · reusable workbooks',
    tech: ['Python', 'AHP', 'TOPSIS', 'Excel'],
    href: 'https://github.com/Sapnilb15/mcdm-app',
    tone: 'gold',
    preview: ['01  Structural steel   .82', '02  Engineered timber  .71', 'ρ   Method agreement  .94'],
  },
  {
    number: '04',
    title: 'Bill Agent',
    category: 'Agentic finance interface',
    description: 'An AI subscription shield that scans transaction CSVs for price hikes, duplicate services, and forgotten recurring charges.',
    result: 'Actionable findings · savings estimates · negotiation prompts',
    tech: ['Next.js', 'TypeScript', 'CopilotKit', 'Motion'],
    href: 'https://github.com/Sapnilb15/Bill-Agent',
    tone: 'green',
    preview: ['PRICE HIKE  +$24 / year', 'DUPLICATE   save $96', 'GHOST       5 months unused'],
  },
  {
    number: '05',
    title: 'CharityGuard',
    category: 'Trust and verification',
    description: 'A charity verifier that combines IRS registration, financial health, scam-language signals, domain age, and disaster-exploitation checks.',
    result: 'Multi-signal trust score · explainable risk flags',
    tech: ['FastAPI', 'Python', 'ProPublica API', 'NLP'],
    href: 'https://github.com/Sapnilb15/charityguard-api',
    tone: 'cyan',
    preview: ['IRS STATUS      verified', 'PROGRAM SPEND   healthy', 'TRUST SCORE     86 / 100'],
  },
  {
    number: '06',
    title: 'Shaktiman',
    category: 'AI fitness tracker',
    description: 'A team-built fitness assistant for body metrics, progress, workouts, and personalized diet recommendations. I designed and implemented the workout library experience.',
    result: 'Workout UI · exercise API schema · responsive visual library',
    tech: ['React', 'Django REST', 'PostgreSQL', 'JWT'],
    href: 'https://github.com/Sapnilb15/AI-fitness-tracker',
    tone: 'purple',
    preview: ['TODAY  Push workout', 'PROGRESS  4 week streak', 'PLAN  personalized targets'],
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
          <p className="eyebrow">नमस्ते · From Nepal to Texas</p>
          <h1>I build thoughtful<br />AI products.</h1>
          <p className="hero-intro">I&apos;m Sapnil Basnet, a computer science student and developer turning complex systems into useful, trustworthy tools.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <ArrowDownRight size={18} /></a>
            <a className="button ghost" href="/Sapnil-Basnet-Resume.pdf">View résumé</a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Featured project">
          <div className="hero-card-top"><span>Featured build</span><span>01 / 06</span></div>
          <h2>Before I Deploy</h2>
          <p>A security scanner that finds risky Django settings and potential secrets without executing source code.</p>
          <div className="tag-row"><span>Python AST</span><span>Security</span><span>CLI</span></div>
          <a href="https://github.com/Sapnilb15/before-i-deploy" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={17} /></a>
        </aside>
        <div className="hero-footer">
          <span>Undergraduate Research Assistant · Texas State University</span>
          <a href="https://github.com/Sapnilb15" target="_blank" rel="noreferrer"><CodeXml size={17} /> GitHub</a>
          <a href="mailto:sapnilb15@gmail.com"><Mail size={17} /> Email</a>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-intro">
          <div><p className="section-kicker">Selected work · 2025–2026</p><h2>Systems built to make difficult decisions feel simple.</h2></div>
          <p>Security, retrieval, decision science, personal finance, public trust, and health—each project starts with a messy real-world problem and ends with an interface people can act on.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.number === '01' ? 'featured' : ''}`} key={project.title}>
              <div className={`project-preview ${project.tone}`} aria-hidden="true">
                <div className="preview-bar"><span /><span /><span /><em>{project.number}</em></div>
                <div className="preview-lines">{project.preview.map((line, index) => <p key={line}><span>0{index + 1}</span>{line}</p>)}</div>
              </div>
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
        <div className="about-heading"><p className="section-kicker">The person behind the work</p><h2>Research mind.<br /><em>Builder&apos;s instinct.</em></h2></div>
        <div className="about-copy">
          <p className="lead">I&apos;m pursuing a B.S. in Computer Science at Texas State University, where I&apos;m a Dean&apos;s List student and Honors College member.</p>
          <p>As an Undergraduate Research Assistant, I work with Dr. Mylene Farias on saliency detection in light-field imaging using PyTorch, OpenCV, CUDA, Caffe, and MATLAB. Before that, I designed responsive websites for local businesses and nonprofits.</p>
          <div className="currently"><span>Currently</span><p>Studying computer science · Researching visual saliency · Building reliable AI tools</p></div>
        </div>
      </section>

      <section className="experience-section" aria-label="Experience and skills">
        <div className="timeline">
          <h2>Experience</h2>
          <article><time>2025—Now</time><div><h3>Undergraduate Research Assistant</h3><p>Texas State University · Saliency detection in light-field imaging</p></div></article>
          <article><time>2022—2023</time><div><h3>Freelance Web Developer</h3><p>Responsive websites for local businesses and nonprofit organizations</p></div></article>
          <article><time>2021—2023</time><div><h3>Volunteer Technician</h3><p>Nepal Red Cross Society · Community health and disaster preparedness</p></div></article>
        </div>
        <div className="skills-panel">
          <h2>Toolbox</h2>
          <div><span>Languages</span><p>Python · Java · C++ · JavaScript · SQL</p></div>
          <div><span>Frameworks</span><p>React · Django · FastAPI · Flask · PyTorch</p></div>
          <div><span>Platforms</span><p>Docker · AWS · CUDA · MATLAB · Git</p></div>
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
        <div className="footer-base"><span><MapPin size={15} /> Texas, USA · Roots in Nepal</span><span>© 2026 Sapnil Basnet</span></div>
      </footer>
    </main>
  );
}
