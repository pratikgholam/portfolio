export const projects = [
  {
    id: "loan-api",
    title: "Loan Application API",
    status: "Complete",
    repo: "https://github.com/pratikgholam/loan-application-api",
    demo: null,
    problem:
      "A REST API for submitting and reviewing loan applications, using fake data only.",
    built:
      "ASP.NET Core (.NET 10) API on PostgreSQL, run with Docker and docker-compose (both in the repo and working).",
    decisions:
      "EF Core for CRUD; Dapper for the reporting endpoint; JWT authentication with roles (Applicant, LoanOfficer, Admin); domain entities with private setters, with status changes made through methods.",
    evaluated: "xUnit unit tests and integration tests. Swagger for API docs.",
    tech: [
      "C#",
      "ASP.NET Core",
      ".NET 10",
      "PostgreSQL",
      "EF Core",
      "Dapper",
      "JWT",
      "xUnit",
      "Swagger",
      "Docker",
    ],
  },
  {
    id: "grounded-qa",
    title: "Grounded QA",
    status: "In progress",
    repo: "https://github.com/pratikgholam/groundedqa",
    demo: null,
    problem:
      "A document Q&A API that answers only from the user's documents and cites its sources. FastAPI + PostgreSQL/pgvector.",
    built: "Project structure only. No code implemented yet.",
    decisions:
      "Planned: [TODO: LLM provider], [TODO: evaluation method], [TODO: key design decisions once built].",
    evaluated: "Done: project structure. Pending: implementation, evaluation.",
    tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "LLM", "RAG"],
  },
];
