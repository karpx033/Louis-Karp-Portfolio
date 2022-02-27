import Card from 'react-bootstrap/Card';


function Home() {
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     Home Text
    </Card.Text>
  </Card.Body>
</Card>
    )
}

export default Home;