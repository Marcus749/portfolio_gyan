import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech (Hons.) in CSE (Data Science)</h4>
                <h5>CSVTU</h5>
              </div>
              <h3>2028</h3>
            </div>
            <p>
              CGPA: 8.6. Focus on Data Structures, Algorithms, AI, Database Management Systems, Network Security, and Object-Oriented Programming.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internshala Student Partner (ISP)</h4>
                <h5>Internshala</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Spearheaded brand advocacy and digital marketing to drive peer upskilling and internship placements. Executed social media strategies to enhance online presence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sustainovation Hackathon</h4>
                <h5>Amity University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a functional prototype integrating Python and IoT sensors to create a scalable platform for Rainwater Harvesting Tracking during a 30-hour intensive hackathon.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Various</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              • AI Tools Workshop (Be10x)<br/>
              • Python for Data Science (NoviTech)<br/>
              • PowerBI & SQL<br/>
              • VLSI Workshop (IIT Bhilai)<br/>
              • Data Analysis & Cyber Job Simulation (Deloitte)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
