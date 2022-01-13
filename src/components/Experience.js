import React from 'react';
import Styled from 'styled-components';
import Typical from 'react-typical';

const ExperienceWrapper = Styled.div`
    width: 100%;
    overflow: hidden;

    & h2 {
        margin-top: 0;
    }

    & p {
        margin: 40px 0 0;
    }
`;

const Experience = () => (
    <ExperienceWrapper>
        <h2>Experience</h2>
        <p>Programming</p>
        <Typical 
            steps={[ 
                'GATSBY / REACT', 3000,
                'HTML / CSS / JAVASCRIPT', 3000,
                'NODE / EXPRESS', 3000,
                'SASS / STYLED-COMPONENTS', 3000,
                'FIREBASE / MONGODB', 3000,
                'WORDPRESS / WOOCOMMERCE', 3000,
            ]}
            loop={Infinity}
            wrapper='h2'
        />
        <p>Design</p>
        <Typical 
            steps={[ 
                'SKETCH', 3000,
                'FIGMA', 3000,
                'AFFINITY', 3000,
                'ILLUSTRATOR / PHOTOSHOP', 3000,
            ]}
            loop={Infinity}
            wrapper='h2'
        />
        <p>Other</p>
        <Typical 
            steps={[ 
                'GOOGLE ANALYTICS', 3000,
                'SEO', 3000,
                'ACCESSIBILITY', 3000,
            ]}
            loop={Infinity}
            wrapper='h2'
        />
    </ExperienceWrapper>
);

export default Experience;