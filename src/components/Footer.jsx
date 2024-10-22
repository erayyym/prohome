import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code fs-20" /> with <i className="fas fa-heart fs-20" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
          className="fs-20"
        > <span className="badge bg-dark">
            Hashir Shoaib
          </span>
        </a>{" "}
        using <i className="fab fa-react fs-20" />
        <p>
          <small className="text-muted fs-20">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
