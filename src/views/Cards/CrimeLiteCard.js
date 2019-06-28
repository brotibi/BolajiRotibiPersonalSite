import React from 'react';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function CrimeLiteCard() {
    return (
        <div className='CrimeLiteCard'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png" />
                <Card.Body>
                    <Card.Title>crime-lite.com</Card.Title>
                    <Card.Text>
                    At Boston Hacks 2018, my team and I developed a website that visualizes the number of traffic lights relative
                    to the crime rate of areas around Boston. We utilized the Google Maps API along with Javascript, Python, HTML and CSS 
                    to develop this website.
                    </Card.Text>
                    <Button href = "https://github.com/brotibi/CS-3500-OOD-Project" variant="primary">GitHub Link</Button>
                    <Button href = "https://http://www.crime-lite.com/" variant="primary">GitHub Link</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CrimeLiteCard;
