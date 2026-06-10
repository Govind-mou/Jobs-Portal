import pdf from "pdf-parse";
import fs from "fs";

export const parseResume =
  async (filePath) => {
    try {
      const dataBuffer =
        fs.readFileSync(filePath);

      const pdfData = await pdf(
        dataBuffer
      );

      const text = pdfData.text;

      const skillsDatabase = [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Python",
        "Java",
        "C++",
        "HTML",
        "CSS",
        "Redux",
        "Next.js",
        "TypeScript",
        "SQL",
        "AWS",
      ];

      const extractedSkills =
        skillsDatabase.filter(
          (skill) =>
            text
              .toLowerCase()
              .includes(
                skill.toLowerCase()
              )
        );

      return {
        text,
        extractedSkills,
      };
    } catch (error) {
      throw new Error(
        "Resume parsing failed"
      );
    }
  };