import { Card } from 'react-bootstrap';

const ShowMore = ({ locName, locType, dimension, residents }) => {
  return (
    <div>
      <Card.Body>
        <Card.Title>{locName}</Card.Title>
        <Card.Title>{locType}</Card.Title>
        <Card.Title>{dimension}</Card.Title>
        <Card.Title>{residents}</Card.Title>
      </Card.Body>
    </div>
  );
};
