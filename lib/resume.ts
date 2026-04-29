import type { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  hero: {
    name: "Jirawat Suwannasit",
    role: "Hardware Test Supervisor",
    taglines: [
      "Seeking: Digital Transformation Roles",
      "Seeking: Energy Management Roles",
      "Seeking: Carbon Footprint Assessment Roles",
      "10+ Years · Hardware & IoT · M.Eng Energy",
    ],
    email: "jirawatpromma@gmail.com",
    phone: "085-108-7887",
  },

  strategicFocus: {
    objective:
      "I aim to leverage my 10+ years in Hardware Reliability and my M.Eng in Energy Management Technology to drive organizational efficiency through IoT, AI Solutions, and Energy & Carbon Management (ISO 14064-1). I am passionate about helping companies reach Net Zero through Digital Transformation — turning operational data into measurable sustainability outcomes.",
    areas: [
      {
        title: "Digital Transformation",
        description:
          "Deploying RPA, IoT systems, and AI-assisted tooling to automate workflows, eliminate manual processes, and unlock real-time operational intelligence.",
        icon: "⚡",
        color: "green",
      },
      {
        title: "Energy Management",
        description:
          "Identifying and executing energy conservation initiatives — from chiller optimization to right-sizing equipment — with a track record of 135.9 MWh annual savings.",
        icon: "🌿",
        color: "emerald",
      },
      {
        title: "Carbon Footprint Assessment",
        description:
          "Applying ISO 14064-1:2018 methodology to measure, report, and reduce organizational carbon emissions — directly supporting corporate Net Zero strategies.",
        icon: "♻",
        color: "neon",
      },
    ],
  },

  techSkills: {
    label: "Tech Stack",
    icon: "cpu",
    skills: [
      "C++",
      "Python",
      "SQL",
      "R",
      "Power Automate",
      "VBA",
      "Power BI",
      "IoT / ESP32",
      "Microcontroller Circuit",
      "AI Prompting",
      "AI Vibe Coding",
    ],
  },

  greenSkills: {
    label: "Green & Energy Stack",
    icon: "leaf",
    skills: [
      "Carbon Footprint Calculation",
      "Power Consumption Analysis",
      "ISO 14064-1:2018",
      "Energy Conservation",
      "Chiller Optimization",
      "HVAC Systems",
      "Vapor Pressure Deficit",
      "Sustainability Reporting",
    ],
  },

  experience: [
    {
      company: "Panasonic Automotive System Asia Pacific",
      role: "Hardware Test Supervisor",
      period: "Oct 2023 – Present",
      current: true,
      bullets: [
        "Develop automated reporting systems that improve lab efficiency and reduce manual workload.",
        "Monitor energy usage and implement conservation initiatives — achieving 135.9 MWh annual reduction.",
        "Lead reliability test planning: design, execution, and data visualization for monthly reports.",
        "Procure and maintain testing equipment; plan budgets and maintenance schedules.",
        "Train employees on tools, equipment, and new technologies integrated into operations.",
        "Collaborate with engineers to execute product reliability tests and cost-effectiveness analyses.",
      ],
    },
    {
      company: "Cal-Comp Electronics",
      role: "QA Hardware Test Engineer",
      period: "Jul 2013 – Mar 2023",
      current: false,
      bullets: [
        "Responsible for reliability test and transportation test laboratory operations.",
        "Supported quality control and product development via functional and physical product testing.",
        "Led root cause analysis, corrective action programs, and mistake-proofing at production lines.",
        "Collaborated with R&D department to improve product quality standards.",
        "Managed non-conforming material investigations with engineering and production teams.",
      ],
    },
  ],

  projects: [
    {
      title: "FY2025 PAS Environmental Award",
      description:
        "Optimized chiller infrastructure with a 1-to-2 water piping bypass system, eliminating redundant cooling loads across the facility.",
      metrics: [
        { value: 135.9, unit: "MWh", label: "Annual Energy Saved", decimals: 1 },
        { value: 62.65, unit: "tCO₂", label: "CO₂ Reduction", decimals: 2 },
        { value: 536805, unit: "THB", label: "Annual Cost Savings", decimals: 0 },
      ],
      tags: ["Chiller", "HVAC", "Energy", "CO₂"],
      featured: true,
    },
    {
      title: "AI-Assisted VBA Application",
      description:
        "Built an AI-assisted VBA automation tool that streamlines test workflow execution with direct database integration.",
      metrics: [
        { value: 74, unit: "%", label: "Lead Time Reduction", decimals: 0 },
        { value: 100, unit: "%", label: "Data Accuracy", decimals: 0 },
      ],
      tags: ["VBA", "AI", "Automation", "Database"],
      featured: false,
    },
    {
      title: "RPA on Power Automate",
      description:
        "Deployed Robotic Process Automation to automate measurement value recording and report generation.",
      metrics: [
        { value: 4, unit: "hrs", label: "Before", decimals: 0 },
        { value: 1.9, unit: "hrs", label: "After", decimals: 1 },
      ],
      tags: ["Power Automate", "RPA", "Reporting"],
      featured: false,
    },
    {
      title: "Exhaust Systems Installation",
      description:
        "Installed exhaust systems for heat removal in the vibration machine room, drastically reducing air conditioner dependency.",
      metrics: [
        { value: 93, unit: "%", label: "AC Usage Reduction", decimals: 0 },
        { value: 18458, unit: "kWh", label: "Annual Energy Saved", decimals: 0 },
      ],
      tags: ["HVAC", "Energy", "Hardware"],
      featured: false,
    },
    {
      title: "Thermal Shock Chamber Optimization",
      description:
        "Right-sized thermal shock chamber procurement — replacing an oversized unit with an appropriately-sized chamber.",
      metrics: [
        { value: 102,    unit: "MWh", label: "Energy Reduction",   decimals: 0 },
        { value: 424287, unit: "THB", label: "Annual Cost Savings", decimals: 0 },
      ],
      tags: ["Hardware", "Energy", "Procurement"],
      featured: false,
    },
    {
      title: "PM Cycle Extension",
      description:
        "Extended preventive maintenance cycles for temperature chambers by 50%, reducing costs while maintaining full tester reliability.",
      metrics: [
        { value: 50, unit: "%", label: "PM Cycle Extended", decimals: 0 },
        { value: 63800, unit: "THB", label: "Cost Reduction", decimals: 0 },
      ],
      tags: ["Maintenance", "Cost Optimization"],
      featured: false,
    },
  ],

  education: [
    {
      degree: "Master of Engineering",
      field: "Energy Management Technology",
      university: "King Mongkut's University of Technology Thonburi",
      location: "Bangkok, Thailand",
      year: "2024",
      coursework: [
        "Energy Conservation in Buildings & Industries",
        "Renewable & Alternative Energy Technologies",
        "Sustainability of Energy",
        "Human Thermal Comfort & Air Quality",
        "Solar Energy in Agriculture",
        "Energy Economics",
      ],
    },
    {
      degree: "Bachelor of Science in Technical Education",
      field: "Electrical Engineering",
      university: "King Mongkut's University of Technology North Bangkok",
      location: "Bangkok, Thailand",
      year: "2013",
    },
  ],

  thesis: {
    title:
      "A Comparison of Efficiency and Energy Consumption between Spray Nozzles System and Ultrasonic Mist Maker in Automatic Humidification Control Greenhouses",
    summary:
      "Designed and built a full IoT-based humidity control system using MCU Node ESP32 and sensors to regulate vapor pressure deficit (vpdL) in agricultural greenhouses.",
    findings: [
      "Controlled vpdL between 0.8–1.2 kPa across 27 lettuce plants in three test setups.",
      "Reduced uncontrolled vpdL from 2.54 kPa to 1.02 kPa (ultrasonic) and 0.91 kPa (spray nozzle).",
      "Both automated systems maintained target vpdL range with no statistically significant difference in humidity distribution.",
      "Ultrasonic mist maker demonstrated higher electricity and water consumption than spray nozzle system.",
    ],
    tags: ["IoT", "ESP32", "Greenhouse", "vpdL Control", "Energy Comparison", "Agriculture"],
  },

  certifications: [
    {
      title: "ISO 14064-1:2018 Requirements",
      issuer: "Certified Body",
      date: "Nov 2024",
      category: "energy",
    },
    {
      title: "Carbon Footprint of Organization Calculation",
      issuer: "Certified Body",
      date: "Nov 2024",
      category: "energy",
    },
    {
      title: "Build Solutions with Power Automate",
      issuer: "Microsoft",
      date: "Aug 2024",
      category: "automation",
    },
    {
      title: "Master of One Page Summary",
      issuer: "Certified Body",
      date: "Sep 2024",
      category: "design",
    },
    {
      title: "Google Business Intelligence",
      issuer: "Coursera / Google",
      date: "Jun 2023",
      category: "data",
    },
    {
      title: "Google Data Analytics",
      issuer: "Coursera / Google",
      date: "Aug 2023",
      category: "data",
    },
    {
      title: "Professional Data Analyst",
      issuer: "DataRockie School",
      date: "Jul 2023",
      category: "data",
    },
  ],
};
