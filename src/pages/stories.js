import React from 'react';
import { graphql } from 'gatsby';
import Styled from 'styled-components';

import Seo from '../components/seo';
import { PageWrapper, Back } from '../components/common';

const ContentWrapper = Styled.div`
    width: 100%;
    display: flex;
    padding-top: 60px;

    @media (max-width: 920px) {
        flex-direction: column;
    } 
`;

const StoriesWrapper = Styled.div`
    width: 70%;
    padding-left: 5%;

    & ul {
        margin: 0;
        padding: 68px 0 0;
    }

    & li {
        padding: 0;
        list-style: none;
        margin-bottom: 40px;
    }

    & a {
        font-size: 60px;
    }

    @media (max-width: 1300px) {
        width: 60%;

        & a {
            font-size: 40px;
        }
    } 

    @media (max-width: 920px) {
        width: 50%;
    } 

    @media (max-width: 920px) {
        width: 100%;
        padding-left: 0;

        & ul {
            padding-top: 40px;
        }
    } 
`;

const TextWrapper = Styled.div`
    width: 30%;
    padding-right: 5%;

    @media (max-width: 1300px) {
        width: 40%;
    } 

    @media (max-width: 920px) {
        width: 50%;
    } 

    @media (max-width: 920px) {
        width: 100%;
    } 

    & h1 {
        margin-top: 0;
    }
`;

const Stories = (props) => {
  return(
    <PageWrapper>   
        <Seo title="Stories" />
        <Back /> 
        <ContentWrapper>
            <TextWrapper>
                <h1>Stories</h1>
                <p>
                    So I've been using the time when creating things for this portfolio website to document what I'm doing on Medium.com.<br/> Mainly for the fun of it, but also, so that maybe someone can learn a thing or two from my experience.<br/><br/> I find it useful to dig deeper into things I'm working on with critical thinking as a weapon, because I believe it's making me become a better web developer.<br/> Why should I use this and not that? Is this what I need or is that better? Is this best practice and so on and so forth.<br/> Anyway, here are links to my Medium stories. Maybe you'll learn something, who knows?
                </p>
            </TextWrapper>
            <StoriesWrapper>
                <ul>
                    {props.data.allFeedAarBlog.edges.map(story => (
                        <li key={story.node.id}>
                            <a href={story.node.link} target="_blank" rel="noreferrer">
                                {story.node.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </StoriesWrapper>
        </ContentWrapper>
    </PageWrapper>  
  )
};

export const query = graphql`
{
    allFeedAarBlog {
        edges {
            node {
            title
            id
            link
            }
        }
    }
}
`;

export default Stories;