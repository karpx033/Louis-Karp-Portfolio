import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function Project1() {
  return (
    <div className="projectImg">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogHomepage.jpg"
            alt="Homepage Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogSignup.jpg"
            alt="Signup Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogWelcome.jpg"
            alt="Welcome Page Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogNewPost.jpg"
            alt="New Post Creation Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogCreated.jpg"
            alt="New Homepage Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogComment2.jpg"
            alt="Comment Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogComment.jpg"
            alt="Comment Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogEditPost.jpg"
            alt="Post Slide"
          />
        </Carousel.Item>
      </Carousel>

      <Card>
        <Card.Body>
          <Card.Title>Tech Blog</Card.Title>
          <Card.Text>
            <p>This app is designed to let the user enter, save, and
        delete posts and comments on a hosted server. Data is stored in a database and is retrievable upon logging in
            </p>
            <div className="media-body">
          <h5 className="mt-0">Links:</h5>
          <a id="whitetext" href="https://tech-blog-site.herokuapp.com/">Deployed application</a>
          <br></br>
   
          <a id="whitetext" href="https://github.com/karpx033/Tech-Blog">GitHub repository</a>

        </div>
          </Card.Text>
          <Card.Text>Languages, Libraries, and Technologies Used:</Card.Text>
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

export default Project1;