import React from 'react';
import styled from 'styled-components';
import db from '../../db.json';

import Widget from '../components/Widget/styles';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';

export const QuizContainer = styled.div`
   width: 100%;
   max-width: 350px;
   padding-top: 45px;
   margin: auto 10%;
   @media screen and (max-width: 500px) {
      margin: auto;
      padding: 15px;
   }
`;

interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
   return (
      <QuizBackground backgroundImage={db.bg}>
         <QuizContainer>
            <Widget>
               <Widget.Header>Dying Light</Widget.Header>
               <Widget.Content>Good Night and Good Luck</Widget.Content>
            </Widget>

            <Widget>
               <Widget.Header>Others Quizzes</Widget.Header>
               <Widget.Content>Hello</Widget.Content>
            </Widget>
            
            <Footer />
         </QuizContainer>

         <GitHubCorner projectUrl="https://github.com/demisrusso9" />
      </QuizBackground>
   );
};

export default Home;
