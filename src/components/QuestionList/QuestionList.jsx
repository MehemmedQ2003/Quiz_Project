import React from 'react';
import { Container, Row, Col, Card, ListGroup, Image } from 'react-bootstrap';

function QuestionList({ questions }) {
  return (
    <Container>
      <Row>
        {questions.map(question => (
          <Col key={question.id} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{question.questionTitle}</Card.Title>
                {question.img && (
                  <Image src={question.img} alt={question.questionTitle} fluid className="mb-3" />
                )}
                <ListGroup variant="flush">
                  {question.answers.map((answer, index) => (
                    <ListGroup.Item key={index}>{answer}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default QuestionList;