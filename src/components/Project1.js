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
          {/* <Carousel.Caption id="picText">
            <p>Homepage</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogSignup.jpg"
            alt="Signup Slide"
          />
          {/* <Carousel.Caption id="picText">
            <p>Signup Page</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogWelcome.jpg"
            alt="Welcome Page Slide"
          />
          {/* <Carousel.Caption id="picText">
            <p>Welcome page upon logging in displaying all posts</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogNewPost.jpg"
            alt="New Post Creation Slide"
          />
          {/* <Carousel.Caption id="picText">
            <p>New post page afterclicking the add post button</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogCreated.jpg"
            alt="New Homepage Slide"
          />
          {/* <Carousel.Caption id="picText">
            <p>Homepage again showing newly created post with commentable, clickable title</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogComment2.jpg"
            alt="Comment Slide"
          />
          {/* <Carousel.Caption id="picText">
            <p>Comments can be made to each post</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogComment.jpg"
            alt="Comment Slide"
          />
          {/* <Carousel.Caption id="picText">
            <p>Comment is linked to the post</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pic"
            src="files/TechBlogEditPost.jpg"
            alt="Post Slide"
          />
          {/* <Carousel.Caption id="picText">
            <p>Posts are even editable and deletable by the user</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <Card>
        <Card.Body>
          <Card.Title>Tech Blog</Card.Title>
          <Card.Text>
            <p>The purpose of the application is to This app is designed to let the user enter, save, and
        delete notes via a front end experience. Data is stored in a database.
            </p>
            <div className="media-body">
          <h5 className="mt-0">Links:</h5>
          <a id="whitetext" href="https://desolate-dawn-08072.herokuapp.com/">Deployed application</a>
          <br></br>
   
          <a id="whitetext" href="https://github.com/karpx033/Tech-Blog">GitHub repository</a>

        </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Project1;