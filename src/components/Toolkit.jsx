import { motion } from "framer-motion"
import { FaReact, FaCss3Alt, FaHtml5, FaDocker, FaNodeJs, FaGitAlt } from "react-icons/fa"
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
  SiDrizzle,
  SiNginx,
  SiGithubactions,
  SiStripe,
  SiSalesforce,
  SiClerk,
} from "react-icons/si"
import { TbApi, TbServer } from "react-icons/tb"
import { GoGear } from "react-icons/go"
import { IconContext } from "react-icons"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

export default function Toolkit() {
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
        { icon: <SiDrizzle />, name: "Drizzle ORM" },
        { icon: <TbServer />, name: "Server Actions" },
      ],
    },
    {
      name: "Infrastructure",
      skills: [
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiSupabase />, name: "Supabase" },
        { icon: <SiNginx />, name: "Nginx" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiGithubactions />, name: "GitHub Actions" },
        { icon: <GoGear />, name: "CI/CD" },
      ],
    },
    {
      name: "Integrations",
      skills: [
        { icon: <SiStripe />, name: "Stripe" },
        { icon: <SiSalesforce />, name: "Salesforce" },
        { icon: <SiClerk />, name: "Clerk Auth" },
      ],
    },
  ]

  return (
    <section className="toolkit section wrapper" id="toolkit">
      <h2 className="section-heading">Technical Skills</h2>
      <IconContext.Provider value={{ size: "1.2em", color: "var(--color-accent)" }}>
        <motion.div
          className="toolkit__categories"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              className="toolkit__category"
              variants={itemVariants}
            >
              <h3 className="toolkit__category-name">{category.name}</h3>
              <ul className="toolkit__skills">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="toolkit__skill">
                    {skill.icon}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </IconContext.Provider>
    </section>
  )
}
