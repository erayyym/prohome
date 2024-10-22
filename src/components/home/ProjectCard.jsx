import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages,
    updated_at,
  } = value;

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || "Project Name"} </Card.Title>
          <Card.Text>{description || "No description available."}</Card.Text>
          {svn_url ? <CardButtons svn_url={svn_url} /> : null}
          <hr />
          {languages ? (
            <Language languages={languages} repo_url={svn_url} />
          ) : (
            "Languages not specified."
          )}
          <CardFooter
            star_count={stargazers_count}
            repo_url={svn_url}
            updated_at={updated_at}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a href={svn_url} target=" _blank" className="btn btn-outline-secondary mx-2">
        <i className="fab fa-github" /> Repo
      </a>
    </div>
  );
};

const Language = ({ languages, repo_url }) => {
  return (
    <div className="pb-3">
      Languages:{" "}
      {languages.length
        ? languages.map((language) => (
            <a
              key={language.name}
              className="card-link"
              href={`${repo_url}/search?l=${language.name}`}
              target=" _blank"
              rel="noopener noreferrer"
            >
              <span className="badge bg-light text-dark">
                {language.name}: {language.percentage}%
              </span>
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, updated_at }) => {
  return (
    <p className="card-text">
      <a
        href={`${repo_url}/stargazers`}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
