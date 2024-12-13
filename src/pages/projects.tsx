import React from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-linen p-4 md:p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Civiccraft Online Solutions Pvt. Ltd"
            description="A Company Website for Client based on E-Governance"
            imageUrl="/images/w3.PNG"
            projectUrl="https://civiccraft.in/"
            githubUrl=""
            externalLinkUrl="https://civiccraft.in/"
            isHackathonProject={true}
          />
  
          <ProjectCard
            title="Kathavachak"
            description="Experience the Power of Audiobooks in Your Language"
            imageUrl="/images/w2.PNG"
            projectUrl="https://kathavachak.in/"
            githubUrl=""
            externalLinkUrl="https://kathavachak.in/"
            isHackathonProject={true}
          />
          <ProjectCard
            title="MTDC Tourism Application"
            description="A Application Proposal for Tourism App"
            imageUrl="/images/w4.png"
            projectUrl="https://www.figma.com/design/YpnkzUNJr4yqeZsd1zyfbT/MTDC?node-id=0-1&t=3kYfr3IfvkqSPIds-1"
            githubUrl=""
            externalLinkUrl="https://www.figma.com/proto/YpnkzUNJr4yqeZsd1zyfbT/MTDC?node-id=2092-11222&t=fRL5fix3nAIybrfD-1"
            isHackathonProject={false}
          />
          <ProjectCard
            title="Elarise"
            description="A Concept for Design Agency"
            imageUrl="/images/w5.png"
            projectUrl="https://www.figma.com/design/820s4jsVD5m56E0SZwFWNa/Elarise?node-id=87-2&t=N7zsQ3C10qRzdUPf-1"
            githubUrl=""
            externalLinkUrl="https://www.figma.com/design/820s4jsVD5m56E0SZwFWNa/Elarise?node-id=87-2&t=N7zsQ3C10qRzdUPf-1"
            isHackathonProject={false}
          />

          <ProjectCard
            title="Logy.AI"
            description="A Document Design and Code"
            imageUrl="/images/w1.png"
            projectUrl="https://www.figma.com/design/wuXWgKmJIgirrC1QqoOO1f/Untitled?node-id=0-1&t=slnbOyHQyPREcwpP-1"
            githubUrl=""
            externalLinkUrl="https://www.figma.com/design/wuXWgKmJIgirrC1QqoOO1f/Untitled?node-id=0-1&t=slnbOyHQyPREcwpP-1"
            isHackathonProject={true}
          />

        
        </section>
      </main>
    </div>
  );
};

export default Projects;
