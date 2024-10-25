// import React, { useState, useEffect, useCallback } from "react";
// import Container from "react-bootstrap/Container";
// import { Jumbotron } from "./migration";
// import Row from "react-bootstrap/Row";
// import ProjectCard from "./ProjectCard";
// import axios from "axios";

// const dummyProject = {
//   name: null,
//   description: null,
//   svn_url: null,
//   stargazers_count: null,
//   languages_url: null,
//   pushed_at: null,
// };
// const API = "https://api.github.com";
// // const gitHubQuery = "/repos?sort=updated&direction=desc";
// // const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

// const Project = ({ heading, username, length, specfic }) => {
//   const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
//   const specficReposAPI = `${API}/repos/${username}`;
//   const dummyProjectsArr = new Array(length + specfic.length).fill(
//     dummyProject
//   );

//   const [projectsArray, setProjectsArray] = useState([]);

//   const fetchRepos = useCallback(async () => {
//     let repoList = [];
//     try {
//       // getting all repos
//       const response = await axios.get(allReposAPI);
//       // slicing to the length
//       repoList = [...response.data.slice(0, length)];
//       // adding specified repos
//       try {
//         for (let repoName of specfic) {
//           const response = await axios.get(`${specficReposAPI}/${repoName}`);
//           repoList.push(response.data);
//         }
//       } catch (error) {
//         console.error(error.message);
//       }
//       // setting projectArray
//       // TODO: remove the duplication.
//       setProjectsArray(repoList);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }, [allReposAPI, length, specfic, specficReposAPI]);

//   useEffect(() => {
//     fetchRepos();
//   }, [fetchRepos]);

//   return (
//     <Jumbotron fluid id="projects" className="bg-light m-0">
//       <Container className="">
//         <h2 className="display-4 pb-5 text-center">{heading}</h2>
//         <Row>
//           {projectsArray.length
//             ? projectsArray.map((project, index) => (
//               <ProjectCard
//                 key={`project-card-${index}`}
//                 id={`project-card-${index}`}
//                 value={project}
//               />
//             ))
//             : dummyProjectsArr.map((project, index) => (
//               <ProjectCard
//                 key={`dummy-${index}`}
//                 id={`dummy-${index}`}
//                 value={project}
//               />
//             ))}
//         </Row>
//       </Container>
//     </Jumbotron>
//   );
// };

// export default Project;
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";


const Project = ({ heading }) => {
  const projectsArray = [
    {
      name: "Pocket Ledger",
      description: "Smart budgetting app that have AI helper, OCR text extraction from photo, voice recognition features! Enables user to do budget and get financial advice anytime, anywhere!",
      svn_url: "https://github.com/erayyym/6Guys",
      stargazers_count: 42,
      languages: [
        { name: "Makefile", percentage: "86.5" },
        { name: "Swift", percentage: "11.1" },
        { name: "C++", percentage: "2.4" }
      ],
      pushed_at: "2023-04-01T00:00:00Z",
    },
    {
      name: "ItsAtrap",
      description: "This is a game full of traps. It is fully designed by me Tech Used: Unity; Physics System: Collider, Trigger, etc.; Event System; Coroutine;Room by room carmera.",
      svn_url: "https://erayyym.itch.io/iwannawin",
      languages: [
        { name: "Unity", percentage: "100" },
        { name: "C#", percentage: "100" },
      ],
      stargazers_count: 0,
      pushed_at: "2024-09-15T00:00:00Z",
    },
    {
      name: "The Legend of Zelda!",
      description: "Recareation of the Legend of Zelda! Tech use: physics system: collider, triger; event system; Interface; Coroutine; State machine. One partner: Junwen Yu",
      svn_url: "https://anemocider.itch.io/zelda-remaster",
      languages: [
        { name: "Unity", percentage: "100" },
        { name: "C#", percentage: "100" },
      ],
      stargazers_count: 0,
      pushed_at: "2024-09-15T00:00:00Z",
    },
    {
      name: "Chatgpt on Wechat",
      description: "Contribution to a open source project on Github. Add one important feature on this project which enables automatically update when people enter/exit a group chat using AI.",
      svn_url: "https://github.com/erayyym/chatgpt-on-wechat",
      languages: [
        { name: "Python", percentage: "100" },
      ],
      stargazers_count: 0,
      pushed_at: "2024-09-15T00:00:00Z",
    },
    // Add more projects as needed
  ];

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.map((project, index) => (
            <ProjectCard
              key={`project-card-${index}`}
              id={`project-card-${index}`}
              value={project}
            />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
