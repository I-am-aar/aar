import React from 'react';

import { PageWrapper, Back } from '../components/common';
import AboutMe from '../components/AboutMe';
import AboutSite from '../components/AboutSite';
import Seo from '../components/seo';


const About = () => (
    <PageWrapper>
        <Seo title="About" />
        <Back/>
        <AboutMe />
        <AboutSite />
    </PageWrapper>
);

export default About;