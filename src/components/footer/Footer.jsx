import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Pwn-Movies is a website built using React.js and Redux Toolkit,
          designed to provide users with an immersive movie-watching experience.
          Leveraging various dependencies such as React Redux, Axios, React
          Player, Dayjs, React Router DOM, React Icons, React Circular
          Progressbar, React Infinite Scroll, and React Lazy Load Image, this
          platform aims to deliver seamless navigation, dynamic content loading,
          and a user-friendly interface. Key features of Pwn-Movies include:
          React.js: The website is built using React.js, a popular JavaScript
          library for building user interfaces, enabling a smooth and responsive
          browsing experience. Redux Toolkit: Redux Toolkit is utilized for
          state management, allowing for efficient handling of application state
          and ensuring seamless data flow throughout the application. React
          Redux: Integrated with Redux Toolkit, React Redux facilitates the
          connection between React components and the Redux store, enabling easy
          access to application state. Axios: Axios is employed for making HTTP
          requests to fetch movie data from external APIs, ensuring efficient
          data retrieval and management. React Player: This library is used to
          embed and stream video content, enabling users to watch movies
          directly within the website. Dayjs: Dayjs is utilized for efficient
          date and time manipulation, ensuring accurate display of timestamps
          and scheduling features. React Router DOM: With React Router DOM, the
          website enables smooth navigation by providing dynamic routing and
          rendering of React components based on URL changes. React Icons: React
          Icons is used to integrate a wide range of icons into the website's
          interface, enhancing visual appeal and user interaction. React
          Circular Progressbar: Implemented for visual feedback during loading
          processes, React Circular Progressbar enhances user experience by
          indicating progress. React Infinite Scroll: Utilized for infinite
          scrolling functionality, React Infinite Scroll ensures seamless
          browsing of movie lists by dynamically loading additional content as
          the user scrolls. React Lazy Load Image: With React Lazy Load Image,
          images are loaded asynchronously, improving page load performance and
          optimizing bandwidth usage by loading images only when they are about
          to be viewed. By combining these technologies and dependencies,
          Pwn-Movies delivers a feature-rich movie-watching platform with
          enhanced performance, dynamic content loading, and a visually
          appealing user interface.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/pawan-kumar284/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/pawan-kumar284/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
