import { FaReact, FaCss3Alt, FaHtml5, FaDocker, FaNodeJs, FaGitAlt } from "react-icons/fa"
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { IconContext } from "react-icons"
import useScrollReveal from "../hooks/useScrollReveal"

export default function Toolkit() {
  const revealRef = useScrollReveal({ stagger: true })

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <TbApi />, name: "REST APIs" },
      ],
    },
    {
      name: "Infrastructure",
      skills: [
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiSupabase />, name: "Supabase" },
        { icon: <FaGitAlt />, name: "Git" },
      ],
    },
  ]

  return (
    <section className="toolkit section wrapper" id="toolkit">
      <h2 className="section-heading">Technical Skills</h2>
      <IconContext.Provider value={{ size: "1.2em", color: "var(--color-accent)" }}>
        <div className="toolkit__categories" ref={revealRef}>
          {skillCategories.map((category) => (
            <div key={category.name} className="toolkit__category">
              <h3 className="toolkit__category-name">{category.name}</h3>
              <ul className="toolkit__skills">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="toolkit__skill">
                    {skill.icon}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </IconContext.Provider>
    </section>
  )
}
