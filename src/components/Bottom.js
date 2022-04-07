import Card from 'react-bootstrap/Card';

function Bottom() {
return (
    <Card id="bot">
        <Card.Footer>
            <div style={{justifyContent: 'space-evenly', display: 'flex'}}>
            <span>Louis Karp</span>
            <span>612.500.2948</span>
            <span>karpx033@gmail.com</span>
            </div>
        </Card.Footer>
    </Card>
)
}

export default Bottom;