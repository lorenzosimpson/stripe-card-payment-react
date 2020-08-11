import React from 'react';
import shoes from '../assets/shoes_ib95364.jpg'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const MainCard = (props) => {
  return (
    <div className='main-card'>
      <Card>
        <CardImg top width="80%" src={shoes} alt="Card image cap" />
        <CardBody>
          <h3>Card title</h3>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick Card text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default MainCard;
