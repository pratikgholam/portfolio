export const experience = [
  {
    company: "Algorithms Software",
    title: "Software Engineer",
    dates: "Jun 2025 – Feb 2026",
    bullets: [
      "Worked on an ERP product's payroll module (feature development and bug fixing).",
      "Built an employee image import feature: upload a single photo or bulk upload; bulk upload uses an Excel import containing image links alongside employee ID and details.",
      "Fixed issues that broke application flow, fixed SQL queries and stored procedures, and debugged the client-side application and delivered fixes.",
    ],
    tags: ["C#", ".NET Framework", "SQL Server", "WinForms", "DevExpress"],
  },
  {
    company: "EECI",
    title: "Software Engineer",
    dates: "May 2023 – Mar 2024",
    bullets: [
      "Worked on real-time monitoring desktop client software in C#. An in-house C/C++ library retrieved raw data from machines or database files and processed it so the C# app could plot datapoints on charts; the library was called from C# via P/Invoke.",
      "Sole developer on a project where the client app connected to hardware over an Ethernet (LAN) connection and used the same C/C++ library to process the raw data and chart it.",
    ],
    tags: [
      "C#",
      ".NET Framework",
      "SQLite",
      "WinForms (default WinForms chart controls)",
      "C/C++ interop (P/Invoke)",
    ],
  },
  {
    company: "D2K Technologies",
    title: "Dotnet Developer",
    dates: "Mar 2022 – Apr 2023",
    bullets: [
      "Built REST APIs (mostly CRUD) for a loan platform's mobile app, using JWT for authentication.",
      "Acted as the link between the database and the frontend team, shaping endpoints around what the client app needed.",
    ],
    tags: ["C#", ".NET Core", "SQL Server", "REST APIs", "JWT"],
  },
  {
    company: "LearningMate Solutions",
    title: "Web Developer",
    dates: "Aug 2019 – Mar 2022",
    bullets: [
      "Built e-learning course content for K-12 sections using ASP.NET MVC.",
      "Added course content and built placeholder sections for videos pulled from the client's storage.",
    ],
    tags: ["ASP.NET MVC"],
  },
];

export const education = {
  degree: "BE Information Technology",
  school: "Mumbai University",
  years: "2015-2019",
};
