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
          <Card.Title>Employee Scheduling Tool</Card.Title>
          <Card.Text>
            <p>My second group project. The purpose off the application is designed to allow a manager to enter employees’ time off requests and display a cumulative table and calendar of those schedules, allowing for easier shift schedule construction.
            </p>
            <div className="media-body">
          <h5 className="mt-0">Links:</h5>
          <a id="whitetext" href="https://shrouded-anchorage-20681.herokuapp.com/">Deployed application</a>
          <br></br>
   
          <a id="whitetext" href="https://github.com/karpx033/Employee-Tracker">GitHub repository</a>

        </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Project4;