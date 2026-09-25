'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react';
import {
  BatteryFull,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Compass,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  LayoutGrid,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  Signal,
  UserRound,
  Wifi,
} from 'lucide-react';
import { experience, links, projects, skills } from './data';

type AppId = 'projects' | 'about' | 'experience' | 'skills' | 'resume' | 'contact';

type IconDef = { label: string; color: string; icon: ReactNode; app?: AppId; href?: string; external?: boolean };

const GithubMark = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
);

const LinkedinMark = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
);

const gridApps: IconDef[] = [
  { label: 'Projects', color: 'linear-gradient(160deg,#3e9bff,#0a60ff)', icon: <LayoutGrid />, app: 'projects' },
  { label: 'About', color: 'linear-gradient(160deg,#a1a1aa,#6b6b73)', icon: <UserRound />, app: 'about' },
  { label: 'Experience', color: 'linear-gradient(160deg,#ffb340,#ff8a00)', icon: <BriefcaseBusiness />, app: 'experience' },
  { label: 'Skills', color: 'linear-gradient(160deg,#c77dff,#8e3bf5)', icon: <BrainCircuit />, app: 'skills' },
  { label: 'GitHub', color: 'linear-gradient(160deg,#3a3a3c,#111113)', icon: <GithubMark />, href: links.github, external: true },
  { label: 'LinkedIn', color: 'linear-gradient(160deg,#1d8cf0,#0a66c2)', icon: <LinkedinMark />, href: links.linkedin, external: true },
];

const dockApps: IconDef[] = [
  { label: 'Mail', color: 'linear-gradient(160deg,#5ac8fa,#1a7cf5)', icon: <Mail />, href: `mailto:${links.email}` },
  { label: 'Contact', color: 'linear-gradient(160deg,#6ee27a,#28c840)', icon: <MessageCircle />, app: 'contact' },
  { label: 'Résumé', color: 'linear-gradient(160deg,#ff6b6b,#e0243a)', icon: <FileText />, app: 'resume' },
  { label: 'Classic', color: 'linear-gradient(160deg,#ffffff,#dfe7f1)', icon: <Compass className="ios-safari" />, href: '/classic' },
];

const appTitles: Record<AppId, string> = {
  projects: 'Projects',
  about: 'About',
  experience: 'Experience',
  skills: 'Skills',
  resume: 'Résumé',
  contact: 'Contact',
};

const subscribeMinute = (onChange: () => void) => {
  const timer = setInterval(onChange, 15_000);
  return () => clearInterval(timer);
};

function useClock() {
  // The server renders Apple's keynote time; the browser swaps in the real clock.
  const minute = useSyncExternalStore(subscribeMinute, () => Math.floor(Date.now() / 60_000), () => null);
  const now = minute === null ? null : new Date(minute * 60_000);
  const time = now ? now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).replace(/\s?[AP]M$/i, '') : '9:41';
  const date = now ? now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' }) : 'Friday, September 25';
  const weekday = now ? now.toLocaleDateString([], { weekday: 'short' }).toUpperCase() : 'FRI';
  const day = now ? now.getDate() : 25;
  return { time, date, weekday, day };
}

function useSwipeUp(onSwipe: () => void) {
  const start = useRef<number | null>(null);
  return {
    onPointerDown: (event: ReactPointerEvent) => { start.current = event.clientY; },
    onPointerUp: (event: ReactPointerEvent) => {
      if (start.current !== null && start.current - event.clientY > 40) onSwipe();
      start.current = null;
    },
  };
}

function StatusBar({ time, light }: { time: string; light: boolean }) {
  return (
    <div className={`ios-status ${light ? 'is-light' : ''}`} aria-hidden="true">
      <span className="ios-status-time">{time}</span>
      <span className="ios-status-icons"><Signal size={16} strokeWidth={2.6} /><Wifi size={16} strokeWidth={2.6} /><BatteryFull size={24} strokeWidth={1.8} /></span>
    </div>
  );
}

function AppIcon({ def, onOpen, showLabel = true }: { def: IconDef; onOpen: (app: AppId, el: HTMLElement) => void; showLabel?: boolean }) {
  const inner = (
    <>
      <span className="ios-icon" style={{ background: def.color }}>{def.icon}</span>
      {showLabel && <span className="ios-icon-label">{def.label}</span>}
    </>
  );
  if (def.href) {
    return (
      <a className="ios-app" href={def.href} aria-label={def.label} {...(def.external ? { target: '_blank', rel: 'noreferrer' } : {})}>{inner}</a>
    );
  }
  return <button type="button" className="ios-app" aria-label={`Open ${def.label}`} onClick={(event) => onOpen(def.app!, event.currentTarget)}>{inner}</button>;
}

function NavBar({ title, back, onBack, onClose }: { title: string; back?: string; onBack?: () => void; onClose: () => void }) {
  return (
    <div className="ios-nav">
      {back && onBack ? (
        <button type="button" className="ios-nav-back" onClick={onBack}><ChevronLeft size={26} strokeWidth={2.4} />{back}</button>
      ) : (
        <button type="button" className="ios-nav-back" onClick={onClose}><ChevronLeft size={26} strokeWidth={2.4} />Home</button>
      )}
      <span className="ios-nav-title">{title}</span>
      <span />
    </div>
  );
}

function ProjectsApp({ detail, setDetail }: { detail: number | null; setDetail: (value: number | null) => void }) {
  if (detail !== null) {
    const project = projects[detail];
    return (
      <div className="ios-page ios-slide-in" key={project.title}>
        <div className="ios-project-hero"><img src={project.image} alt={`${project.title}: ${project.category} concept illustration`} /></div>
        <div className="ios-appstore-head">
          <span className="ios-appstore-icon"><img src={project.image} alt="" /></span>
          <div>
            <h2>{project.title}</h2>
            <p>{project.category}</p>
            <a className="ios-get" href={project.href} target="_blank" rel="noreferrer">VIEW</a>
          </div>
        </div>
        <div className="ios-stats">
          <div><span>STACK</span><strong>{project.tech[0]}</strong><em>{project.tech.length} tools</em></div>
          <div><span>NUMBER</span><strong>#{detail + 1}</strong><em>of {projects.length}</em></div>
          <div><span>SOURCE</span><strong><GithubMark /></strong><em>GitHub</em></div>
        </div>
        <section className="ios-section">
          <h3>About this project</h3>
          <p>{project.description}</p>
        </section>
        <section className="ios-section">
          <h3>Highlights</h3>
          <ul className="ios-list">{project.result.split(' · ').map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="ios-section">
          <h3>Built with</h3>
          <div className="ios-chips">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
        </section>
        <a className="ios-button-primary" href={project.href} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={16} /></a>
      </div>
    );
  }
  return (
    <div className="ios-page">
      <p className="ios-kicker">Selected work · 2025-2026</p>
      <h1 className="ios-large-title">Projects</h1>
      <p className="ios-lede">Systems built to make difficult decisions feel simple.</p>
      <div className="ios-today">
        {projects.map((project, index) => (
          <button type="button" className="ios-today-card" key={project.title} aria-label={`Open ${project.title}`} onClick={() => setDetail(index)}>
            <img src={project.image} alt="" loading="lazy" />
            <span className="ios-today-copy">
              <span className="ios-today-kicker">{project.category}</span>
              <strong>{project.title}</strong>
              <span className="ios-today-sub">{project.result}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function AboutApp() {
  return (
    <div className="ios-page ios-grouped">
      <h1 className="ios-large-title">About</h1>
      <div className="ios-cell-group ios-profile">
        <span className="ios-avatar">SB</span>
        <div><strong>Sapnil Basnet</strong><span>Computer science student and developer</span></div>
      </div>
      <p className="ios-group-label">Education</p>
      <div className="ios-cell-group">
        <div className="ios-cell"><span className="ios-cell-icon" style={{ background: '#5856d6' }}><GraduationCap size={17} /></span><span>University</span><em>Texas State</em></div>
        <div className="ios-cell"><span className="ios-cell-icon" style={{ background: '#0a84ff' }}><LayoutGrid size={17} /></span><span>Major</span><em>Computer Science</em></div>
        <div className="ios-cell"><span className="ios-cell-icon" style={{ background: '#34c759' }}><BrainCircuit size={17} /></span><span>Minor</span><em>Data Analytics</em></div>
        <div className="ios-cell"><span className="ios-cell-icon" style={{ background: '#ff3b30' }}><MapPin size={17} /></span><span>Location</span><em>Texas, USA</em></div>
      </div>
      <p className="ios-group-label">Bio</p>
      <div className="ios-cell-group ios-note">
        <p>I&apos;m majoring in Computer Science with a minor in Data Analytics at Texas State University. My background combines undergraduate research with hands-on experience in full-stack development and artificial intelligence.</p>
        <p>I enjoy applying what I learn to practical problems and building software that people find useful, turning complex systems into useful, trustworthy tools.</p>
      </div>
    </div>
  );
}

function ExperienceApp() {
  return (
    <div className="ios-page ios-grouped">
      <h1 className="ios-large-title">Experience</h1>
      <div className="ios-timeline">
        {experience.map((item) => (
          <article key={item.detail} className="ios-event">
            <span className="ios-event-time">{item.time}</span>
            <div className="ios-event-card">
              <strong>{item.role}</strong>
              <span className="ios-event-org">{item.org}</span>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function SkillsApp() {
  return (
    <div className="ios-page ios-grouped">
      <h1 className="ios-large-title">Skills</h1>
      {skills.map((group) => (
        <div key={group.title}>
          <p className="ios-group-label">{group.title}</p>
          <div className="ios-cell-group ios-chip-group"><div className="ios-chips">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>
        </div>
      ))}
    </div>
  );
}

function ResumeApp() {
  return (
    <div className="ios-page ios-grouped">
      <h1 className="ios-large-title">Résumé</h1>
      <div className="ios-cell-group ios-file">
        <span className="ios-file-thumb"><FileText size={34} /><em>PDF</em></span>
        <strong>Sapnil-Basnet-Resume.pdf</strong>
        <span>Sapnil Basnet · 2026</span>
        <div className="ios-file-actions">
          <a className="ios-button-primary" href={links.resume} target="_blank" rel="noreferrer">Open <ExternalLink size={16} /></a>
          <a className="ios-button-secondary" href={links.resume} download>Download <Download size={16} /></a>
        </div>
      </div>
      <p className="ios-group-label">At a glance</p>
      <div className="ios-cell-group">
        <div className="ios-cell"><span>Current role</span><em>Research Assistant</em></div>
        <div className="ios-cell"><span>Projects</span><em>{projects.length}</em></div>
        <div className="ios-cell"><span>Skills</span><em>{skills.reduce((total, group) => total + group.items.length, 0)}</em></div>
      </div>
    </div>
  );
}

function ContactApp() {
  return (
    <div className="ios-page ios-grouped ios-contact">
      <span className="ios-avatar is-large">SB</span>
      <h1>Sapnil Basnet</h1>
      <p className="ios-contact-sub">Let&apos;s build something useful together.</p>
      <div className="ios-contact-actions">
        <a href={`mailto:${links.email}`}><Mail size={20} />mail</a>
        <a href={links.github} target="_blank" rel="noreferrer"><GithubMark />github</a>
        <a href={links.linkedin} target="_blank" rel="noreferrer"><LinkedinMark />linkedin</a>
        <a href={links.resume}><FileText size={20} />résumé</a>
      </div>
      <div className="ios-cell-group ios-contact-fields">
        <a href={`mailto:${links.email}`}><span>email</span><strong>{links.email}</strong></a>
        <a href={links.github} target="_blank" rel="noreferrer"><span>github</span><strong>github.com/Sapnilb15</strong></a>
        <a href={links.linkedin} target="_blank" rel="noreferrer"><span>linkedin</span><strong>in/sapnil-basnet</strong></a>
        <div><span>location</span><strong>Texas, USA</strong></div>
      </div>
    </div>
  );
}

export default function IosPhone() {
  const { time, date, weekday, day } = useClock();
  const [locked, setLocked] = useState(true);
  const [unlocking, setUnlocking] = useState(false);
  const [openApp, setOpenApp] = useState<AppId | null>(null);
  const [closing, setClosing] = useState(false);
  const [origin, setOrigin] = useState({ x: '50%', y: '50%' });
  const [detail, setDetail] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const screenRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => setScale(Math.min(1, (window.innerHeight - 40) / 852));
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  const unlock = useCallback(() => {
    if (!locked || unlocking) return;
    setUnlocking(true);
    setTimeout(() => { setLocked(false); setUnlocking(false); }, 420);
  }, [locked, unlocking]);

  const open = useCallback((app: AppId, el: HTMLElement) => {
    const screen = screenRef.current?.getBoundingClientRect();
    const icon = el.querySelector('.ios-icon')?.getBoundingClientRect() ?? el.getBoundingClientRect();
    if (screen) {
      setOrigin({
        x: `${((icon.left + icon.width / 2 - screen.left) / screen.width) * 100}%`,
        y: `${((icon.top + icon.height / 2 - screen.top) / screen.height) * 100}%`,
      });
    }
    setDetail(null);
    setClosing(false);
    setOpenApp(app);
  }, []);

  const close = useCallback(() => {
    if (!openApp || closing) return;
    setClosing(true);
    setTimeout(() => { setOpenApp(null); setClosing(false); setDetail(null); }, 320);
  }, [openApp, closing]);

  const showDetail = (value: number | null) => {
    setDetail(value);
    bodyRef.current?.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (detail !== null) setDetail(null);
      else close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close, detail]);

  const lockSwipe = useSwipeUp(unlock);
  const homeSwipe = useSwipeUp(close);

  const appBody = openApp === 'projects' ? <ProjectsApp detail={detail} setDetail={showDetail} />
    : openApp === 'about' ? <AboutApp />
    : openApp === 'experience' ? <ExperienceApp />
    : openApp === 'skills' ? <SkillsApp />
    : openApp === 'resume' ? <ResumeApp />
    : openApp === 'contact' ? <ContactApp />
    : null;

  return (
    <div className="ios-root">
      <div className="ios-backdrop" aria-hidden="true" />
      <aside className="ios-side">
        <p className="ios-side-kicker">Portfolio · iOS edition</p>
        <h1>Sapnil Basnet</h1>
        <p>A computer science student and developer turning complex systems into useful, trustworthy tools.</p>
        <p className="ios-side-hint">{locked ? 'Swipe up or click the lock screen to unlock.' : 'Tap an app to open it. Swipe up on the bar or press Esc to go home.'}</p>
        <a href="/classic">Open the classic site <ChevronRight size={16} /></a>
      </aside>

      <div className="ios-device" style={{ '--scale': scale } as CSSProperties}>
        <div className="ios-screen" ref={screenRef}>
          <div className="ios-wallpaper" aria-hidden="true" />
          <div className="ios-island" aria-hidden="true" />
          <StatusBar time={time} light={!openApp || closing} />

          <main className={`ios-home ${locked ? 'is-hidden' : ''} ${openApp && !closing ? 'is-behind' : ''}`} aria-hidden={locked || undefined}>
            <div className="ios-widgets">
              <button type="button" className="ios-widget ios-widget-profile" onClick={(event) => open('about', event.currentTarget)}>
                <span className="ios-avatar">SB</span>
                <span className="ios-widget-copy">
                  <strong>Sapnil Basnet</strong>
                  <span>CS student &amp; developer building useful, trustworthy tools.</span>
                  <em><MapPin size={12} /> Texas State University</em>
                </span>
              </button>
            </div>
            <div className="ios-grid">
              <button type="button" className="ios-widget ios-widget-small ios-widget-calendar" onClick={(event) => open('experience', event.currentTarget)}>
                <span className="ios-cal-day">{weekday}</span>
                <span className="ios-cal-num">{day}</span>
                <span className="ios-cal-event"><i />Research</span>
                <span className="ios-cal-meta">Texas State</span>
                <span className="ios-icon-label">Experience</span>
              </button>
              {gridApps.slice(0, 4).map((def) => <AppIcon key={def.label} def={def} onOpen={open} />)}
              <button type="button" className="ios-widget ios-widget-small ios-widget-photo" onClick={(event) => { open('projects', event.currentTarget); setDetail(0); }}>
                <img src={projects[0].image} alt="" />
                <span><em>Featured</em>{projects[0].title}</span>
                <span className="ios-icon-label">Projects</span>
              </button>
              {gridApps.slice(4).map((def) => <AppIcon key={def.label} def={def} onOpen={open} />)}
            </div>
            <div className="ios-search-pill" aria-hidden="true"><Search size={13} strokeWidth={3} /> Search</div>
            <nav className="ios-dock" aria-label="Dock">{dockApps.map((def) => <AppIcon key={def.label} def={def} onOpen={open} showLabel={false} />)}</nav>
          </main>

          {locked && (
            <section className={`ios-lock ${unlocking ? 'is-leaving' : ''}`} aria-label="Lock screen">
              <button type="button" className="ios-lock-hit" onClick={unlock} {...lockSwipe} aria-label="Unlock" />
              <div className="ios-lock-top">
                <Lock size={18} strokeWidth={2.4} />
                <span className="ios-lock-date">{date}</span>
                <span className="ios-lock-time">{time}</span>
              </div>
              <div className="ios-notifications">
                <div className="ios-notification"><span className="ios-icon is-mini" style={{ background: gridApps[4].color }}><GithubMark /></span><div><strong>GitHub</strong><p>{projects.length} projects shipped, from security scanners to RAG assistants.</p></div><em>now</em></div>
                <div className="ios-notification"><span className="ios-icon is-mini" style={{ background: gridApps[2].color }}><BriefcaseBusiness /></span><div><strong>Texas State University</strong><p>Undergraduate Research Assistant, 2025-2026.</p></div><em>2m ago</em></div>
                <div className="ios-notification"><span className="ios-icon is-mini" style={{ background: dockApps[0].color }}><Mail /></span><div><strong>Sapnil Basnet</strong><p>Have a problem worth solving? Let&apos;s build something useful together.</p></div><em>5m ago</em></div>
              </div>
              <div className="ios-lock-bottom"><span>Swipe up to open</span><i className="ios-home-bar" /></div>
            </section>
          )}

          {openApp && (
            <section
              className={`ios-window ${closing ? 'is-closing' : ''}`}
              style={{ '--ox': origin.x, '--oy': origin.y } as CSSProperties}
              aria-label={appTitles[openApp]}
            >
              <NavBar
                title={openApp === 'projects' && detail !== null ? projects[detail].title : appTitles[openApp]}
                back={openApp === 'projects' && detail !== null ? 'Projects' : undefined}
                onBack={() => showDetail(null)}
                onClose={close}
              />
              <div className="ios-window-body" ref={bodyRef}>{appBody}</div>
              <button type="button" className="ios-home-hit" onClick={close} {...homeSwipe} aria-label="Go to home screen"><i className="ios-home-bar is-dark" /></button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
