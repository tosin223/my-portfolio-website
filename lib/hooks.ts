import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { sectionName } from "./types";

type useSectionInViewProps = {
  sectionName: sectionName;
};

export function useSectionInView(sectionName: sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 100) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
