"use client";

const Project = ({ params }) => {
  return (
    <div>
      <h1>Project</h1>
      <br />
      All routes
      {params.all.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  );
};

export default Project;
