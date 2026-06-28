const { useState } = React;

function App() {
  const [page, setPage] = useState("Dashboard");
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("Untitled Film Project");

  const menu = [
    "Dashboard",
    "Projects",
    "Story",
    "Characters",
    "Environments",
    "Camera Journey",
    "Storyboard",
    "Animation",
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
    const name = e.target.projectName.value.trim();
    if (name) setProjectName(name);
    setShowModal(false);
    setPage("Projects");
  }

  function PageContent() {
    if (page === "Dashboard") {
      return (
        <>
          <div className="card">
            <h2>Current Production</h2>
            <p>{projectName}</p>
            <p className="pending">Begin by creating or opening a film project.</p>
          </div>

          <div className="card">
            <h2>Production Pipeline</h2>
            <div className="pipeline">
              {stages.map((stage, i) => (
                <div className="stage" key={i}>
                  <span>{i + 1}. {stage[0]}</span>
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

    if (page === "Projects") {
      return (
        <div className="card">
          <h2>Projects</h2>
          <p><strong>{projectName}</strong></p>
          <p className="pending">Status: Foundation Ready</p>
          <button className="primary" onClick={() => setPage("Story")}>
            Open Project Workspace
          </button>
        </div>
      );
    }

    if (page === "Story") {
      return (
        <div className="card">
          <h2>Story Workspace</h2>
          <p>Upload or paste a story here. Later, AI will analyze scenes, characters, environments, and production needs.</p>
          <textarea placeholder="Paste story here..." rows="8"></textarea>
          <button className="primary">Analyze Story</button>
        </div>
      );
    }

    if (page === "Characters") {
      return (
        <div className="card">
          <h2>Characters</h2>
          <p>Create character bibles, master sheets, face sheets, costumes, expressions, and continuity references.</p>
          <button className="primary">Create Character Bible</button>
        </div>
      );
    }

    if (page === "Environments") {
      return (
        <div className="card">
          <h2>Environments</h2>
          <p>Design locations, lighting, weather, atmosphere, geography, and environment continuity.</p>
          <button className="primary">Create Environment Bible</button>
        </div>
      );
    }

    if (page === "Camera Journey") {
      return (
        <div className="card">
          <h2>Camera Journey</h2>
          <p>Plan continuous camera logic, lens progression, movement, blocking, and shot-to-shot continuity.</p>
          <button className="primary">Generate Camera Journey</button>
        </div>
      );
    }

    if (page === "Storyboard") {
      return (
        <div className="card">
          <h2>Storyboard</h2>
          <p>Generate storyboard frames from approved camera journey and shot list.</p>
          <button className="primary">Generate Storyboard</button>
        </div>
      );
    }

    if (page === "Animation") {
      return (
        <div className="card">
          <h2>Animation</h2>
          <p>Create animation prompts with camera motion, character motion, timing, and transition continuity.</p>
          <button className="primary">Create Animation Package</button>
        </div>
      );
    }

    if (page === "Export") {
      return (
        <div className="card">
          <h2>Export</h2>
          <p>Export the final production package including story bible, character bible, environment bible, storyboard, prompts, editing guide, and sound plan.</p>
          <button className="primary">Export Production Package</button>
        </div>
      );
    }
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
        <div className="header">
          <h1>{page}</h1>
          <p>Autonomous Filmmaking Operating System</p>
          <button className="primary" onClick={() => setShowModal(true)}>
            + New Film Project
          </button>
        </div>

        <div className="content">
          <PageContent />
        </div>
      </main>

      {showModal && (
        <div className="modal-bg">
          <form className="modal card" onSubmit={createProject}>
            <h2>Create New Film Project</h2>

            <label>Project Name</label>
            <input name="projectName" placeholder="Example: Hanuman - The Name of Ram" />

            <label>Genre</label>
            <input placeholder="Example: Mythological / Drama / Action" />

            <label>Runtime</label>
            <input placeholder="Example: 3 minutes" />

            <label>Visual Style</label>
            <input placeholder="Example: IMAX cinematic, photorealistic" />

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
