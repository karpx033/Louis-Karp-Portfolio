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
          <Card.Title style={{fontSize: '3vh' }}>Barnyard Symphony</Card.Title>
          <Card.Text>
            <p>This is my final group project. It is a children’s app designed to allow a logged in user to view various farm animals and play their respective sounds, save them to a favorited animals page, as well as play them through three octave piano using the animals’ sounds as notes. I assumed the role of porject manager on this project.
            </p>
            <div className="media-body">
          <h5 className="mt-0" style={{fontSize: '3vh' }}>Links:</h5>
          <a id="whitetext" href="https://fierce-beyond-80772.herokuapp.com/">Deployed application</a>
          <br></br>
   
          <a id="whitetext" href="https://github.com/karpx033/Barnyard-Symphony-">GitHub repository</a>

        </div>
          </Card.Text>
          <Card.Text style={{fontSize: '3vh' }}>Languages, Libraries, and Technologies Used:</Card.Text>
          <Card.Text>
          <div style={{marginTop: '3vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-html5 fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-css3 fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-js-square fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-bootstrap fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-solid fa-database fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-solid fa-server fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-react fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-npm fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-git fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-github fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-node fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-node-js fa-2xl"></i></span>
    </div>
    <div style={{marginTop: '5vh'}}>As well as Graphql, Mongodb, and JWT</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Project2;