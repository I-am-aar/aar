import * as React from "react"
import { Link } from 'gatsby';
import Styled from 'styled-components';

import { PageWrapper, Button } from "../components/common"
import Seo from "../components/seo"

const NotFoundWrapper = Styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 100px;
  }
`;

const BackLink = Styled(Link)`
  padding: 20px 40px;
  background: #000;
  color: white;
`;

const NotFoundPage = () => (
    <PageWrapper>
      <Seo title="404" />
      <NotFoundWrapper>
        <h1>404</h1>
        <BackLink to="/">GO BACK</BackLink>
      </NotFoundWrapper>
    </PageWrapper>
)

export default NotFoundPage
