import React from 'react';
import { Button } from 'react-bootstrap';
import './HomePage.css'; 

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Our Store!</h1>
            <Button variant="primary">Shop Now</Button>
        </div>
    );
};

export default HomePage;
