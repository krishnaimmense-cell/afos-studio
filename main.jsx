import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Film, Folder, BookOpen, User, Mountain, Camera, PanelsTopLeft, Clapperboard, Download } from 'lucide-react';
import './styles.css';

const modules = [
  { name: 'Dashboard', icon: Film },
  { name: 'Projects', icon: Folder },
  { name: 'Story', icon: BookOpen },
  { name: 'Characters', icon: User },
  { name: 'Environments', icon: Mountain },
  { name: 'Camera Journey', icon: Camera },
  { name: 'Storyboard', icon: PanelsTopLeft },
  { name: 'Animation', icon: Clapperboard },
  { name: 'Export', icon: Download }
];

const stages = [
  'Story Analysis', 'Director Vision', 'Characters', 'Environments',
  'Camera Journey', 'Scene Breakdown', 'Shot List', 'Storyboard',
  'Image Generation', 'Animation', 'Editing', 'Sound Design',
  'Quality Review', 'Export'
];

function App() {
  const [page, setPage] = useState('Dashboard');
  const [project, setProject] = useState('Untitled Film Project');
  const [showNew, setShowNew] = useState(false);

  function createProject(e) {
    e.preventDefault();
    const name = new FormData(e.currentTarget).get('name');
    if (name) setProject(name);
    setShowNew(false);
    setPage('Projects');
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">AFOS Studio</div>
        <div className="tag">FILM OS</div>
        <nav>
          {modules.map(({ name, icon: Icon }) => (
            <button key={name} onClick={() => setPage(name)} className={page === name ? 'active' : ''}>
              <Icon size={18} /> {name}
            </button>
          ))}
        </nav>
      </aside>

      <main>
        <header>
          <div className="pill">AFOS v1.0 React + Vite</div>
          <h1>{page}</h1>
          <p>Autonomous Filmmaking Operating System</p>
          <button className="primary" onClick={() => setShowNew(true)}>+ New Film Project</button>
        </header>

        <section className="content">
          {page === 'Dashboard' && <Dashboard project={project} />}
          {page === 'Projects' && <Module title={project} desc="Central workspace for this film project." action="Open Production Board" />}
          {page === 'Story' && <Story />}
          {page === 'Characters' && <Module title="Characters" desc="Create character bibles, master sheets, expressions, costumes, and continuity references." action="Create Character Bible" />}
          {page === 'Environments' && <Module title="Environments" desc="Create environment bibles, lighting, weather, geography, and location continuity." action="Create Environment Bible" />}
          {page === 'Camera Journey' && <Module title="Camera Journey" desc="Plan lens progression, blocking, motivated camera motion, and one-camera continuity." action="Generate Camera Journey" />}
          {page === 'Storyboard' && <Module title="Storyboard" desc="Generate storyboard frames from locked camera journey and shot list." action="Generate Storyboard" />}
          {page === 'Animation' && <Module title="Animation" desc="Create animation prompts with camera motion, character motion, timing, and continuity." action="Create Animation Package" />}
          {page === 'Export' && <Module title="Export" desc="Export production package: story, bibles, storyboards, prompts, edit guide, sound guide." action="Export Package" />}
        </section>
      </main>

      {showNew && (
        <div className="overlay">
          <form className="modal" onSubmit={createProject}>
            <h2>Create Film Project</h2>
            <label>Project name</label>
            <input name="name" placeholder="Hanuman - The Name of Ram" />
            <label>Genre</label>
            <input placeholder="Mythological / Drama / Action" />
            <label>Runtime</label>
            <input placeholder="3 minutes" />
            <label>Visual style</label>
            <input placeholder="IMAX cinematic, photorealistic" />
            <button className="primary">Create Project</button>
            <button type="button" className="secondary" onClick={() => setShowNew(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

function Dashboard({ project }) {
  return (
    <>
      <div className="card hero">
        <div className="pill">Current Production</div>
        <h2>{project}</h2>
        <p>Production foundation ready. Begin with story analysis.</p>
        <div className="bar"><span style={{width:'7%'}} /></div>
        <small>Progress: 7%</small>
      </div>
      <div className="grid">
        {stages.map((s, i) => (
          <div className="stage" key={s}>
            <span>{String(i + 1).padStart(2, '0')}. {s}</span>
            <b className={i === 0 ? 'ready' : 'pending'}>{i === 0 ? 'Ready' : 'Not Started'}</b>
          </div>
        ))}
      </div>
    </>
  );
}

function Story() {
  return (
    <div className="card">
      <div className="pill">Story AI</div>
      <h2>Story Workspace</h2>
      <p>Paste story here. Later this will connect to AI for analysis.</p>
      <textarea placeholder="Paste your story or screenplay..." />
      <button className="primary">Analyze Story</button>
    </div>
  );
}

function Module({ title, desc, action }) {
  return (
    <div className="card">
      <div className="pill">Production Module</div>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="mini">Status: Not Started</div>
      <div className="mini">AI Engine: Placeholder</div>
      <button className="primary">{action}</button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
