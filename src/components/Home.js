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
     I am a Full Stack Engineer who is passionate about coding. I thrive when challanged and always enjoy learning new things. At home my favorite hobbies are playing guitar, singing, and gaming. 
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ marginTop: '10vh'}}>
  <Card.Body>
    <Card.Title>Skills</Card.Title>
    <Card.Text>
    <FontAwesomeIcon icon="fa-brands fa-html5" />
    <FontAwesomeIcon icon="fa-brands fa-css3" />
    <FontAwesomeIcon icon={faCoffee} />
    </Card.Text>
  </Card.Body>
</Card>
</div>
    )
}

export default Home;