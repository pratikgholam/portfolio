export const projects = [
  {
    id: "01",
    name: "Loan Application API",
    status: "Completed",
    description:
      "A REST API for submitting, reviewing, and tracking loan applications. Applicants submit and track their own applications; loan officers review, approve, or reject them. Every status change is recorded with the acting user, a timestamp, and an optional note, giving a full audit trail.",
    highlights: [
      "JWT authentication with role-based authorization (Applicant, LoanOfficer, Admin)",
      "EF Core for writes, Dapper with hand-written SQL for reporting",
      "xUnit integration tests against a real PostgreSQL instance",
    ],
    stack: ["C#", "ASP.NET Core", ".NET 10", "PostgreSQL", "EF Core", "Dapper", "JWT", "xUnit", "Docker"],
    repo: "https://github.com/pratikgholam/loan-application-api",
  },
  {
    id: "02",
    name: "Grounded QA",
    status: "In progress",
    description:
      "A document Q&A API that answers questions using only your uploaded documents and cites the chunks it used. If the retrieved text doesn't support an answer, it says so instead of guessing. Built with AI-assisted tooling; evaluation is in progress.",
    highlights: [
      "Document ingestion with chunking and vector embeddings",
      "Retrieval from PostgreSQL with pgvector",
      "Evaluation set with expected source chunks (results pending)",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker", "pytest"],
    repo: "https://github.com/pratikgholam/groundedqa",
  },
];