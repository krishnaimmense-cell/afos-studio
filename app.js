const { useState } = React;

function App() {
  const [page, setPage] = useState("Dashboard");
  const [showModal, setShowModal] = useState(false);
  const [project, setProject] = useState({
    name: "Untitled Film Project",
    genre: "Mythological",
    runtime: "3 minutes",
    style: "IMAX cinematic, photorealistic",
    story: ""
  });

  const menu = [
    "Dashboard",
    "Projects",
    "Story",
    "Director Vision",
    "Characters",
    "Environments",
    "Camera Journey",
    "Scene Breakdown",
    "Shot List",
    "Storyboard",
    "Image Generation",
    "Animation",
    "Editing",
    "Sound Design",
    "Quality Review",
    "Export"
  ];

  const stages = [
    ["Story Analysis", "Ready"],
    ["Director Vision", "Not Started"],
    ["Characters", "Not Started"],
    ["Environments", "Not Started"],
    ["Camera Journey", "Not Started"],
    ["Scene Breakdown", "Not Started"],
    ["Shot List", "Not Started"],
    ["Storyboard", "Not Started"],
    ["Image Generation", "Not Started"],
    ["Animation", "Not Started"],
    ["Editing", "Not Started"],
    ["Sound Design", "Not Started"],
    ["Quality Review", "Not Started"],
    ["Export", "Not Started"]
  ];

  function createProject(e) {
    e.preventDefault();
    setProject({
      name: e.target.projectName.value || "Untitled Film Project",
      genre: e.target.genre.value || "Mythological",
      runtime: e.target.runtime.value || "3 minutes",
      style: e.target.style.value || "IMAX cinematic, photorealistic",
      story: e.target.story.value || ""
    });
    setShowModal(false);
    setPage("Projects");
  }

  function Header() {
    return (
      <div className="header">
        <div className="badge">AFOS v0.3 Prototype</div>
        <h1>{page}</h1>
        <p>Autonomous Filmmaking Operating System</p>
        <button className="primary" onClick={() => setShowModal(true)}>
          + New Film Project
        </button>
      </div>
    );
  }

  function Dashboard() {
    const completed = 1;
    const progress = Math.round((completed / stages.length) * 100);

    return (
      <>
        <div className="card">
          <span className="badge">Current Production</span>
          <h2>{project.name}</h2>
          <p>
            Genre: {project.genre} · Runtime: {project.runtime}<br />
            Style: {project.style}
          </p>
          <div className="progress">
            <div className="progress-inner" style={{ width: progress + "%" }}></div>
          </div>
          <p>Progress: {progress}%</p>
          <button className="primary" onClick={() => setPage("Story")}>
            Continue Production
          </button>
        </div>

        <div className="card">
          <h2>Production Pipeline</h2>
          <div className="grid">
            {stages.map((stage, i) => (
              <div className="stage" key={stage[0]}>
                <span>{String(i + 1).padStart(2, "0")}. {stage[0]}</span>
                <span className={stage[1] === "Ready" ? "ready" : "pending"}>
                  {stage[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  function Projects() {
    return (
      <div className="card">
        <span className="badge">Project Workspace</span>
        <h2>{project.name}</h2>
        <p>
          This is the central workspace for your film. Every production module
          will connect here: story, characters, environments, camera, storyboard,
          animation, editing, sound, and export.
        </p>
        <div className="small-list">
          <div className="small-item">Genre: {project.genre}</div>
          <div className="small-item">Target Runtime: {project.runtime}</div>
          <div className="small-item">Visual Style: {project.style}</div>
        </div>
        <button className="primary" onClick={() => setPage("Story")}>
          Open Story Workspace
        </button>
      </div>
    );
  }

  function Story() {
    return (
      <div className="card">
        <span className="badge">Story Module</span>
        <h2>Story Workspace</h2>
        <p>
          Upload or paste a story. Later this button will call Story AI to detect
          acts, scenes, characters, locations, emotional beats, and runtime.
        </p>
        <textarea defaultValue={project.story} placeholder="Paste your story here..."></textarea>
        <div className="module-actions">
          <button className="primary">Analyze Story</button>
          <button className="primary secondary" onClick={() => setPage("Director Vision")}>
            Next: Director Vision
          </button>
        </div>
      </div>
    );
  }

  function SimpleModule({ title, badge, description, button, next }) {
    return (
      <div className="card">
        <span className="badge">{badge}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="small-list">
          <div className="small-item">Status: Not Started</div>
          <div className="small-item">AI Engine: Placeholder</div>
          <div className="small-item">Continuity: Pending</div>
        </div>
        <div className="module-actions">
          <button className="primary">{button}</button>
          {next && (
            <button className="primary secondary" onClick={() => setPage(next)}>
              Next: {next}
            </button>
          )}
        </div>
      </div>
    );
  }

  function PageContent() {
    if (page === "Dashboard") return <Dashboard />;
    if (page === "Projects") return <Projects />;
    if (page === "Story") return <Story />;

    const pages = {
      "Director Vision": {
        badge: "Director AI",
        description: "Define the emotional tone, visual language, pacing, theme, and cinematic identity of the film.",
        button: "Generate Director Vision",
        next: "Characters"
      },
      "Characters": {
        badge: "Character AI",
        description: "Create character bibles, master sheets, face sheets, costumes, expressions, accessories, and continuity references.",
        button: "Create Character Bible",
        next: "Environments"
      },
      "Environments": {
        badge: "Environment AI",
        description: "Design locations, lighting, weather, architecture, geography, scale, and environmental storytelling.",
        button: "Create Environment Bible",
        next: "Camera Journey"
      },
      "Camera Journey": {
        badge: "Camera AI",
        description: "Plan one-camera continuity, lens progression, shot movement, blocking, motivated cuts, and cinematic flow.",
        button: "Generate Camera Journey",
        next: "Scene Breakdown"
      },
      "Scene Breakdown": {
        badge: "Scene Engine",
        description: "Break the story into production-ready scenes with purpose, duration, location, characters, and emotional beats.",
        button: "Generate Scene Breakdown",
        next: "Shot List"
      },
      "Shot List": {
        badge: "Shot Engine",
        description: "Create shot numbers, duration, lens, camera angle, movement, action, transition, and sound design.",
        button: "Generate Shot List",
        next: "Storyboard"
      },
      "Storyboard": {
        badge: "Storyboard AI",
        description: "Generate storyboard frames from approved shot list and camera journey while preserving continuity.",
        button: "Generate Storyboard",
        next: "Image Generation"
      },
      "Image Generation": {
        badge: "Image AI",
        description: "Generate production images based on locked storyboard, character bible, environment bible, and camera plan.",
        button: "Generate Images",
        next: "Animation"
      },
      "Animation": {
        badge: "Animation AI",
        description: "Create animation prompts with camera motion, character motion, timing, physics, and transition continuity.",
        button: "Create Animation Package",
        next: "Editing"
      },
      "Editing": {
        badge: "Editing AI",
        description: "Plan cut rhythm, scene order, transitions, pacing, color notes, and final timeline structure.",
        button: "Create Editing Plan",
        next: "Sound Design"
      },
      "Sound Design": {
        badge: "Sound AI",
        description: "Plan music, Foley, ambience, silence, voice, mixing, and emotional sound progression.",
        button: "Create Sound Plan",
        next: "Quality Review"
      },
      "Quality Review": {
        badge: "QA AI",
        description: "Review story, character, environment, camera, storyboard, animation, editing, and sound continuity.",
        button: "Run Quality Review",
        next: "Export"
      },
      "Export": {
        badge: "Export Engine",
        description: "Export the final production package including story bible, character bible, environment bible, storyboards, prompts, editing guide, and sound plan.",
        button: "Export Production Package"
      }
    };

    const data = pages[page];
    return (
      <SimpleModule
        title={page}
        badge={data.badge}
        description={data.description}
        button={data.button}
        next={data.next}
      />
    );
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">AFOS Studio</div>
        <div className="subtitle">FILM OS</div>
        <div className="menu">
          {menu.map(item => (
            <button
              key={item}
              className={page === item ? "active" : ""}
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      <main className="main">
        <Header />
        <div className="content">
          <PageContent />
        </div>
      </main>

      {showModal && (
        <div className="modal-bg">
          <form className="modal card form" onSubmit={createProject}>
            <h2>Create New Film Project</h2>

            <label>Project Name</label>
            <input name="projectName" placeholder="Example: Hanuman - The Name of Ram" />

            <label>Genre</label>
            <input name="genre" placeholder="Example: Mythological / Drama / Action" />

            <label>Target Runtime</label>
            <input name="runtime" placeholder="Example: 3 minutes" />

            <label>Visual Style</label>
            <input name="style" placeholder="Example: IMAX cinematic, photorealistic" />

            <label>Story / Notes</label>
            <textarea name="story" placeholder="Paste your story idea here..."></textarea>

            <button className="primary" type="submit">Create Project</button>
            <button className="primary secondary" type="button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
