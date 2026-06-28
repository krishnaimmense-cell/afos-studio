function Dashboard({ projectName, stages }) {
  return (
    <>
      <div className="card">
        <h2>Current Production</h2>
        <p><strong>{projectName}</strong></p>
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
