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
    status: "Complete",
    repo: "https://github.com/pratikgholam/groundedqa",
    demo: null,
    problem:
      "A document Q&A API that answers only from the user's documents and cites its sources. FastAPI + PostgreSQL/pgvector.",
    built:
      "FastAPI document Q&A API with PostgreSQL/pgvector; answers grounded in user-uploaded documents with source citations.",
    decisions:
      "Chose pgvector for similarity search and kept retrieval scoped to user-uploaded documents only.",
    evaluated: "Done: implementation and evaluation.",
    tech: ["Python", "FastAPI", "PostgreSQL", "pgvector"],
  },
  {
    id: "loanflow-api",
    title: "LoanFlow API",
    status: "Complete",
    repo: "https://github.com/pratikgholam/loanflow-api",
    demo: null,
    problem: "A REST API for loan processing, built with Python and FastAPI.",
    built: "Python and FastAPI backend for loan intake and decisioning.",
    decisions: "FastAPI with Pydantic models and SQLAlchemy for data access.",
    evaluated: "Unit and integration tests.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic"],
  },
  {
    id: "parking-lot",
    title: "Parking Lot",
    status: "Complete",
    repo: "https://github.com/pratikgholam/parking-lot-lld",
    demo: null,
    problem: "A low-level design pattern implementation of a parking lot system.",
    built: "Python implementation of the parking lot low-level design.",
    decisions: "Object-oriented design modelling lots, levels, spots, and vehicles.",
    evaluated: "Manual scenario tests across vehicle types and lot states.",
    tech: ["Python", "Object-oriented design", "Low-level design"],
  },
];
