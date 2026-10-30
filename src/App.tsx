import { useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, BrainCircuit, GraduationCap, Download, Users, Phone
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Assistive Communication System',
    category: 'ACADEMIC PROJECT',
    description: 'A system for converting hand gestures into text and speech to support communication for deaf and mute people.',
    stack: ['Python', 'Gesture Recognition', 'Deep Learning', 'User Interface'],
    github: 'https://github.com/sree-stru/Assistive-Communication-System',
  },
]

const experiences = [
  {
    date: 'JUNE 2025',
    role: 'AI & Data Science Intern',
    organisation: 'KTU',
    details: [
      'Worked with data cleaning and exploratory data analysis using Python.',
      'Created data visualisations using Matplotlib and Excel.',
      'Explored machine learning workflows using scikit-learn.',
    ],
  },
  {
    date: 'JUNE 2025',
    role: 'Cyber Security & Ethical Hacking Intern',
    organisation: 'KTU',
    details: [
      'Learned about network security, encryption, and vulnerability assessment.',
      'Explored secure coding practices and ethical hacking tools.',
    ],
  },
]

const skillGroups = [
  { icon: Code2, title: 'Programming Languages', skills: ['Python', 'R', 'SQL', 'C', 'Java', 'JavaScript'] },
  { icon: BrainCircuit, title: 'Data & Machine Learning', skills: ['Data Cleaning', 'EDA', 'Predictive Modeling', 'Data Mining', 'Feature Extraction', 'scikit-learn'] },
  { icon: Database, title: 'Libraries & Web', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Excel', 'HTML', 'CSS'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Sisira V home">SV<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#leadership" onClick={closeMenu}>Leadership</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">COMPUTER SCIENCE & ENGINEERING · DATA SCIENCE</div>
            <h1>Hi, I'm Sisira V.<br /><span>Data Science student.</span></h1>
            <p className="hero-intro">I’m a B.Tech Computer Science and Engineering student specialising in Data Science at Mar Athanasius College of Engineering, Kothamangalam. My academic and internship experience includes Python, data analysis, machine learning, and cybersecurity.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my project <ArrowDownRight size={17} /></a>
              <a className="button button-outline" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={16} /> View résumé</a>
            </div>
            <div className="hero-meta">
              <span><GraduationCap size={15} /> B.Tech · Data Science</span>
              <span>CGPA · 7.78</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative monogram illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="art-center"><span>SV</span><small>DATA SCIENCE</small></div>
            <div className="float-card card-top"><BrainCircuit size={16} /><span>AI & Data Science</span></div>
            <div className="float-card card-bottom"><Database size={16} /><span>Data · Analysis · Models</span></div>
            <span className="art-index">SISIRA V · PORTFOLIO</span>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <p>AREAS & TOOLS</p>
            <div><span>Python</span><i>✳</i><span>Data Analytics</span><i>✳</i><span>Machine Learning</span><i>✳</i><span>Cybersecurity</span></div>
          </div>
        </section>

        <section className="section-wrap content-section about-section" id="about">
          <div className="section-label"><span>01 / ABOUT</span><span className="label-line" /></div>
          <div className="about-grid">
            <h2>Learning through<br /><em>building.</em></h2>
            <div className="about-body">
              <p className="large-copy">A Computer Science and Engineering student focused on Data Science.</p>
              <p>My résumé highlights experience with Python, exploratory data analysis, machine learning workflows, and cybersecurity concepts through internships and an academic project.</p>
              <div className="about-facts">
                <div><strong>7.78</strong><span>B.Tech CGPA</span></div>
                <div><strong>97.5%</strong><span>Higher Secondary</span></div>
                <div><strong>2027</strong><span>Expected graduation</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section projects-section" id="projects">
          <div className="section-label"><span>02 / PROJECT</span><span className="label-line" /><span className="section-count">01 PROJECT</span></div>
          <div className="section-heading-row">
            <h2>Selected <em>work.</em></h2>
            <p>Academic project listed in my résumé.</p>
          </div>
          <div className="project-grid single-project">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top"><span>{project.number}</span><span className="project-status">Academic project</span></div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">View repository <Github size={15} /></a>
                  <span className="project-arrow"><ArrowUpRight size={19} /></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-band" id="experience">
          <div className="section-wrap content-section">
            <div className="section-label"><span>03 / EXPERIENCE</span><span className="label-line" /></div>
            <div className="section-heading-row">
              <h2>Internship <em>experience.</em></h2>
              <p>Internships completed in June 2025.</p>
            </div>
            <div className="experience-list">
              {experiences.map((item, index) => (
                <article className="experience-item" key={item.role}>
                  <div className="experience-date">{item.date}<span>0{index + 1}</span></div>
                  <div className="experience-main">
                    <h3>{item.role}</h3><p className="experience-org">{item.organisation} <span>·</span> Internship</p>
                    <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </div>
                  <ArrowUpRight className="experience-arrow" size={20} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section education-section" id="education">
          <div className="section-label"><span>04 / EDUCATION</span><span className="label-line" /></div>
          <div className="section-heading-row">
            <h2>Academic <em>background.</em></h2>
          </div>
          <div className="education-list">
            <article className="education-item">
              <div className="education-year">2023 – 2027</div>
              <div><h3>Mar Athanasius College of Engineering</h3><p>B.Tech in Computer Science and Engineering (Data Science)</p></div>
              <strong>CGPA: 7.78</strong>
            </article>
            <article className="education-item">
              <div className="education-year">Higher Secondary</div>
              <div><h3>AKM Higher Secondary School</h3><p>Science</p></div>
              <strong>97.5%</strong>
            </article>
          </div>
        </section>

        <section className="section-wrap content-section skills-section" id="skills">
          <div className="section-label"><span>05 / SKILLS</span><span className="label-line" /></div>
          <div className="section-heading-row">
            <h2>Skills & <em>technologies.</em></h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, skills }) => (
              <article className="skill-card" key={title}>
                <div className="skill-icon"><Icon size={20} /></div>
                <h3>{title}</h3>
                <div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
            <article className="skill-card">
              <div className="skill-icon"><Users size={20} /></div>
              <h3>Soft Skills</h3>
              <div className="skill-tags">{['Problem-solving', 'Adaptability', 'Communication', 'Team leadership', 'Critical thinking'].map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          </div>
        </section>

        <section className="leadership-section" id="leadership">
          <div className="section-wrap content-section">
            <div className="section-label"><span>06 / LEADERSHIP & ACTIVITIES</span><span className="label-line" /></div>
            <div className="leadership-block">
              <div><span className="mini-label">LEADERSHIP & MEMBERSHIPS</span><h3>Campus involvement<br />& collaboration.</h3></div>
              <div className="leadership-content">
                <p><strong>UG Degree Representative</strong> — College Union, Computer Science Department (Data Science).</p>
                <div className="leadership-tags"><span>ISTE</span><span>IEEE</span><span>ASME</span><span>NSS Media Team Volunteer</span><span>Sanskriti’25 Decoration Sub-core</span><span>Model United Nations Delegate · CET</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-label"><span>07 / CONTACT</span><span className="label-line" /></div>
            <p className="mini-label">CONTACT DETAILS</p>
            <h2>Get in <em>touch.</em></h2>
            <p className="contact-copy">Contact me through email, phone, LinkedIn, or GitHub.</p>
            <a className="button button-dark contact-button" href="mailto:sisirasarath2004@gmail.com">Email me <Mail size={16} /></a>
            <div className="social-row">
              <a href="tel:+918547050875"><Phone size={17} /> 8547050875</a>
              <a href="mailto:sisirasarath2004@gmail.com"><Mail size={17} /> Email <ArrowUpRight size={14} /></a>
              <a href="https://www.linkedin.com/in/sisira-v/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
              <a href="https://github.com/sisirasarath" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark" href="#home">SV<span>.</span></a>
        <p>Sisira V · Computer Science and Engineering (Data Science)</p>
        <span>© {new Date().getFullYear()} SISIRA V</span>
      </footer>
    </div>
  )
}

export default App
