"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading> My Projects</SectionHeading>

      <div>
        {projectsData.map((project, i) => (
          <React.Fragment>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
