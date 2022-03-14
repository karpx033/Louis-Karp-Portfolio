import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function Project2() {
  return (
    <div className="projectImg">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/BarnyardSymphonyHomepage.jpg"
            alt="Barnyard Symphony Homepage"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="files/BarnyardSymphonyLogin.jpg"
            alt=" Barnyard Symphony Login and Signup"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="files/AnimalPage.jpg"
            alt="Slideshow of animals and their respective sounds"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="files/SavedSong.jpg"
            alt="List of saved animals"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="files/Piano.jpg"
            alt="3 Octave animal sounds keyboard"
          />
        </Carousel.Item>
      </Carousel>

      <Card>
        <Card.Body>
          <Card.Title>Barnyard Symphony</Card.Title>
          <Card.Text>
            <p>Children’s app designed to allow a logged in user to view various farm animals and play their respective sounds, save them to a favorited animals page, as well as a three octave piano using the animals’ sounds as notes
            </p>
            <div className="media-body">
          <h5 className="mt-0">Links:</h5>
          <a id="whitetext" href="https://fierce-beyond-80772.herokuapp.com/">Deployed application</a>
          <br></br>
   
          <a id="whitetext" href="https://github.com/karpx033/Barnyard-Symphony-">GitHub repository</a>

        </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Project2;