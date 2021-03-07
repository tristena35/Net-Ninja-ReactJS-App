import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="centers">About</h4>
            <p>This is a random paragraph!</p>
        </div>
    )
}

export default Rainbow(About);