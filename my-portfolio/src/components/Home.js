import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


function Home() {
    return(
        <div>
  <Image style={{ width: 'auto', height: '50vh' }}roundedCircle='true' src="files/ME.jpg" />
<Card style={{ width: 'auto', height: 'auto'}}>
<Card.Body>
    <Card.Title>About Me</Card.Title>
    <Card.Text>
     I am a Full Stack Engineer who is passionate about coding. I thrive when challanged and always enjoy learning new things. At home my favorite hobbies are playing guitar, singing, and gaming. 
    </Card.Text>
  </Card.Body>
</Card>
</div>
    )
}

export default Home;