// Import: Packages
import React, { useState, useEffect } from "react";

// Import: Elements
import { Container, Wrapper } from "./Overview.elements";

// Component: Overview
export default function Overview() {
  return (
    <>
      <Container data-testid={"overview"}>
        <Wrapper>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores autem et quo tempora cupiditate dolor laborum totam nesciunt
            nulla aliquid voluptate, fuga maxime vitae eos? Quas fuga provident
            cum.
          </p>
        </Wrapper>
      </Container>
    </>
  );
}
