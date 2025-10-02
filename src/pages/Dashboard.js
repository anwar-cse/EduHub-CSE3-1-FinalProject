import React from "react";
import { Container, Row, Col, Card, ListGroup, ProgressBar, Button } from "react-bootstrap";

function Dashboard() {
  const activities = [
    "Submitted Math Homework",
    "Viewed Physics Notes",
    "Uploaded Assignment Proposal",
  ];

  const courses = [
    { name: "Mathematics", progress: 70 },
    { name: "Physics", progress: 45 },
    { name: "CSE Fundamentals", progress: 85 },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Student Dashboard</h2>
      <Row>
        {/* Profile Section */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>👤 Student Profile</Card.Title>
              <Card.Text>
                <strong>Name:</strong> John Doe <br />
                <strong>Email:</strong> john@example.com <br />
                <strong>Department:</strong> CSE
              </Card.Text>
              <Button variant="primary" size="sm">
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Recent Activity */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>📌 Recent Activity</Card.Title>
              <ListGroup variant="flush">
                {activities.map((a, index) => (
                  <ListGroup.Item key={index}>{a}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Course Progress */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>📚 Course Progress</Card.Title>
              {courses.map((c, index) => (
                <div key={index} className="mb-3">
                  <strong>{c.name}</strong>
                  <ProgressBar
                    now={c.progress}
                    label={`${c.progress}%`}
                    variant={c.progress > 60 ? "success" : "warning"}
                  />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quick Links */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>⚡ Quick Links</Card.Title>
              <div className="d-flex gap-3 flex-wrap">
                <Button variant="outline-primary" href="/courses">
                  View Courses
                </Button>
                <Button variant="outline-success" href="/assignments">
                  Assignments
                </Button>
                <Button variant="outline-info" href="/notes">
                  My Notes
                </Button>
                <Button variant="outline-warning" href="/upload">
                  Upload Resource
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
