import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <h1> My Projects</h1>
      <div className="project1" data-aos="fade-right">
        <h2>Github user API Project</h2>

        <ul
          style={{
            fontFamily: "cursive",
            fontSize: "20px",
            padding: "5px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          <li>
            {" "}
            This is a simple webapp in which you can find the details of any
            github users by entering their username.{" "}
          </li>
          <li>
            I have used React and css for designing and development and github
            users API for building this project{" "}
          </li>
        </ul>

        <br />
        <div className="techstack">
          <h3>Tech Used </h3>
          <i className="fa-brands fa-react" style={{ color: "blue" }}></i>
          <i className="fa-brands fa-css3-alt" style={{ color: "#2a6ee5" }}></i>

          <i className="fa-brands fa-github" style={{ color: "white" }}></i>
          <i className="fa-brands fa-git-alt" style={{ color: "white" }}></i>
          <br />
        </div>
        <a href="https://github-api-user-finder.netlify.app/" target="_blank">
          Live
        </a>
        <a href="https://github.com/Priyanshu629/Github-User-Finder" target="_blank">
          Code
        </a>
      </div>

      <div className="project1" data-aos="fade-right">
        <h2>Food Ordering Website</h2>

        <ul
          style={{
            fontFamily: "cursive",
            fontSize: "20px",
            padding: "5px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          <li> A Food ordering website like swiggy</li>
          <li>A website built using React.</li>
        </ul>

        <br />
        <div className="techstack">
          <h3>Tech Used </h3>
          <i className="fa-brands fa-react" style={{ color: "blue" }}></i>
          <i className="fa-brands fa-css3-alt" style={{ color: "#2a6ee5" }}></i>
          <i className="fa-brands fa-github" style={{ color: "white" }}></i>
          <i className="fa-brands fa-git-alt" style={{ color: "white" }}></i>
          <br />
        </div>
        <a href="https://my-food-express.netlify.app" target="_blank">
          Live
        </a>
        <a
          href="https://github.com/Priyanshu629/React-Food-App"
          target="_blank"
        >
          Code
        </a>
      </div>

      <div className="project1" data-aos="fade-right">
        <h2>Heritage Website</h2>

        <ul
          style={{
            fontFamily: "cursive",
            fontSize: "20px",
            padding: "5px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          <li>
            {" "}
            A heritage website in which you will get information about top 10
            heritage places in Kolkata where you can visit.
          </li>
          <li>This is simple static website made using HTML and CSS.</li>
        </ul>

        <br />
        <div className="techstack">
          <h3>Tech Used </h3>
          <i className="fa-brands fa-html5" style={{ color: "#ab1c12" }}></i>
          <i className="fa-brands fa-css3-alt" style={{ color: "#2a6ee5" }}></i>
          <i className="fa-brands fa-github" style={{ color: "white" }}></i>
          <i className="fa-brands fa-git-alt" style={{ color: "white" }}></i>
          <br />
        </div>
        <a href="https://heritageofkolkata.netlify.app" target="_blank">
          Live
        </a>
        <a
          href="https://github.com/Priyanshu629/heritageWebsite"
          target="_blank"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default Projects;
