import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './HomePage.css'; 

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Our Store!</h1>
            <Button variant="primary">Shop Now</Button>

            <Card style={{ width: '18rem', marginTop: '20px' }}>
                <Card.Body>
                    <Card.Title>Featured Promotion</Card.Title>
                    <Card.Text>
                        Check out our latest offers and discounts!
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomePage;
