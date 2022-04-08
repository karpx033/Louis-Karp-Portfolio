import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function Project4() {
  return (
    <div className="projectImg">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/EmployeeScheduling1.jpg"
            alt="Homepage Slide"
          />
          {/* <Carousel.Caption>
            <p>Homepage</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="files/EmployeeScheduling2.jpg"
            alt="Login/Sign Up Slide"
          />
          {/* <Carousel.Caption>
            <p>Login/Sign Up</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="files/EmployeeScheduling3.jpg"
            alt="Availabilities Slide"
          />
          {/* <Carousel.Caption>
            <p>Compiled Availabilities Table with dynamic Calendar</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="files/EmployeeScheduling4.jpg"
            alt="Availability Form Slide"
          />
          {/* <Carousel.Caption>
            <p>Availability form with dynamically updating calendar</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <Card>
        <Card.Body>
          <Card.Title style={{fontSize: '3vh' }}>Employee Scheduling Tool</Card.Title>
          <Card.Text>
            <p>This is my second group project. The purpose off the application is designed to allow a manager to enter multiple employees’ time off requests and display a cumulative table and calendar of those schedules, allowing for easier shift schedule construction. I assumed the role of project manager on this project.
            </p>
            <div className="media-body">
          <h5 className="mt-0" style={{fontSize: '3vh' }}>Links:</h5>
          <a id="whitetext" href="https://shrouded-anchorage-20681.herokuapp.com/">Deployed application</a>
          <br></br>
   
          <a id="whitetext" href="https://github.com/karpx033/Employee-Tracker">GitHub repository</a>

        </div>
          </Card.Text>
          <Card.Text style={{fontSize: '3vh' }}>Languages, Libraries, and Technologies Used:</Card.Text>
          <Card.Text>
          <div style={{marginTop: '3vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-html5 fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-css3 fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-js-square fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-bootstrap fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-node fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-node-js fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-solid fa-database fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-solid fa-server fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-npm fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-git fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-github fa-2xl"></i></span>
    </div>
    <div style={{marginTop: '5vh'}}>As well as Handlebars, Sequelize, Mysql, Dotenv, and Express</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Project4;