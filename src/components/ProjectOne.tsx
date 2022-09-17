import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectOne: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <button onClick={() => navigate(-1)}>Back</button>
      </header>
      <main>Hey!</main>
    </div>
  );
};

export default ProjectOne;
