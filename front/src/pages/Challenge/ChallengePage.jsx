import React, { useState } from "react";
import { Container, Col, Row, Modal, Button } from "react-bootstrap";
import ChallengeView from "./ChallengeView";
import ChallengeCreate from "./ChallengeCreate"

function ChallengePage() {

  return (

      <Container className="pt-5 ps-0 pb-5" style={{ width: "80%" }}>
        <Button>
          챌린지 모집하기
        </Button>
        <ChallengeView />
        <ChallengeCreate />
      </Container>
  );
}

export default ChallengePage;
