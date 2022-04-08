import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Home() {
    return(
        <div >
  <Image style={{ width: 'auto', height: '50vh' }}roundedCircle='true' src="files/Louis.Headshot.jpg" />
<Card style={{ width: 'auto', height: 'auto', marginTop: '5vh'}}>
<Card.Body>
    <Card.Title clas="projectImg">About Me</Card.Title>
    <Card.Text>
     I am a Full Stack Developer who is passionate about coding and loves working on projects. I thrive when challanged to critically think and always enjoy learning new things. I am a recent graduate of the Full Stack Web Development program offered through the University of Minnesota. My professional work history is in logistics and operations management at a local brewery in Minneapolis, MN. Additionally I have attained a Bachelor's in Fisheries and Wildlife from the University of Minnesota.
    </Card.Text>
    <Card.Text>At home my favorite hobbies are playing guitar, singing, and gaming. </Card.Text>
  </Card.Body>
</Card>
<Card style={{ marginTop: '10vh'}}>
  <Card.Body>
    <Card.Title>Languages, Libraries, and Technologies Known</Card.Title>
    <div style={{marginTop: '3vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-html5 fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-css3 fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-js-square fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-sass fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-bootstrap fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-node fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-node-js fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-solid fa-database fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-solid fa-server fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-react fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-npm fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-git fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-brands fa-github fa-2xl"></i></span>
    <span style={{marginLeft: '2vw', marginTop: '2vh'}}><i class="fa-solid fa-font-awesome"></i></span>
    </div>
    <div style={{marginTop: '5vh'}}>As well as Handlebars, Sequelize, Mongodb, Mysql, Graphql, JWT, Dotenv, and Express</div>
  </Card.Body>
</Card>
</div>
    )
}

export default Home;