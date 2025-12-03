function Projects() {
  return (
    <div id="Projects">
      <h1>Projects</h1>
      <div className="Projects">
        <div className="ProjectsLeftCon">
          <div
            className="ProjectLeft"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="ProjectCard">
              <a href="https://billmaker-sigma.vercel.app/" target="_blank">
                SmartBill Pro &#8592;
              </a>
              <p>
                Built a complete billing and inventory application with secure
                admin authentication (JWT + bcrypt) and protected routes.
                Implemented product management including Add, Edit, Delete, and
                real-time search functionality for faster workflow. Added a
                dynamic billing system where products can be selected instantly,
                quantities updated, and totals auto-calculated. Designed
                responsive dashboard UI with React Router and developed
                optimized REST APIs using Express & MongoDB.
              </p>
              <div>
                <i class="fa-brands fa-react"></i>
                <i class="fa-solid fa-database"></i>
                <i class="fa-brands fa-square-js"></i>
                <i class="fa-brands fa-css"></i>
              </div>
            </div>
          </div>
          <div
            className="ProjectLeft"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="ProjectCard">
              <a href="https://zerodhahome.onrender.com" target="_blank">
                TradeX &#8592;
              </a>
              <p>
                TradeX is a modern full-stack trading platform built with a
                sleek, Zerodha-inspired UI for a smooth trading experience.
                Features real-time market data, live price updates, and
                interactive charts for informed decision-making. Built with a
                robust backend API, ensuring fast, reliable trade execution and
                data handling.Includes portfolio tracking, watchlists, and
                responsive dashboard components.Optimized for desktop usage,
                with mobile view still under development.Designed as an
                end-to-end full-stack project showcasing UI/UX, backend logic,
                and real-time integrations.
              </p>
              <div>
                <i class="fa-brands fa-react"></i>
                <i class="fa-solid fa-database"></i>
                <i class="fa-brands fa-square-js"></i>
                <i class="fa-brands fa-css"></i>
                <i class="fa-brands fa-html5"></i>
              </div>
            </div>
          </div>
          {/* <div
            className="ProjectLeft"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="ProjectCard">
              <a href="#" target="_blank">
                Coming Soon &#8592;{" "}
              </a>
              <p>
                TradeX is a full-stack stock &amp; trading platform inspired by
                Zerodha. It enables users to buy, sell, and track assets in real
                time with an intuitive and responsive interface. The platform is
                built with a secure authentication system, ensuring safe user
                login, signup, and portfolio management.
              </p>
              <div>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-css"></i>
                <i class="fa-brands fa-square-js"></i>
                <i class="fa-brands fa-html5"></i>
              </div>
            </div>
          </div> */}
        </div>
        <div className="ProjectsLine"></div>
        <div className="ProjectsRightCon">
          <div
            className="ProjectRight"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="ProjectCard">
              <a href="https://airbnb-clone-da6l.onrender.com" target="_blank">
                StayEase 🏡 &#8592;{" "}
              </a>
              <p>
                WanderLust is a full-stack web application inspired by Airbnb.
                It features a secure authentication system with login, signup,
                and session handling using Passport.js. Users can leave reviews
                and ratings, making the platform interactive and
                community-driven. The design is fully responsive for desktop and
                mobile, styled with Bootstrap and custom CSS. Deployed on Render
                with MongoDB Atlas, WanderLust showcases the integration of
                backend logic, frontend design, and cloud deployment.
              </p>
              <div>
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css"></i>
                <i class="fa-brands fa-bootstrap"></i>
                <i class="fa-brands fa-square-js"></i>
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-solid fa-database"></i>
              </div>
            </div>
          </div>
          {/* <div
            className="ProjectRight"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="ProjectCard">
              <a href="https://airbnb-clone-da6l.onrender.com" target="_blank">
                coming soon &#8592;{" "}
              </a>
              <p>
                WanderLust is a full-stack web application inspired by Airbnb.
                It features a secure authentication system with login, signup,
                and session handling using Passport.js. Users can leave reviews
                and ratings, making the platform interactive and
                community-driven. The design is fully responsive for desktop and
                mobile, styled with Bootstrap and custom CSS. Deployed on Render
                with MongoDB Atlas, WanderLust showcases the integration of
                backend logic, frontend design, and cloud deployment.
              </p>
              <div>
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css"></i>
                <i class="fa-brands fa-bootstrap"></i>
                <i class="fa-brands fa-square-js"></i>
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-solid fa-database"></i>
              </div>
            </div>
          </div> */}
          <div
            className="ProjectRight"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="ProjectCard">
              <a href="https://airbnb-clone-da6l.onrender.com" target="_blank">
                Coming soon &#8592;{" "}
              </a>
              <p>
                WanderLust is a full-stack web application inspired by Airbnb.
                It features a secure authentication system with login, signup,
                and session handling using Passport.js. Users can leave reviews
                and ratings, making the platform interactive and
                community-driven. The design is fully responsive for desktop and
                mobile, styled with Bootstrap and custom CSS. Deployed on Render
                with MongoDB Atlas, WanderLust showcases the integration of
                backend logic, frontend design, and cloud deployment.
              </p>
              <div>
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css"></i>
                <i class="fa-brands fa-bootstrap"></i>
                <i class="fa-brands fa-square-js"></i>
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-solid fa-database"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
