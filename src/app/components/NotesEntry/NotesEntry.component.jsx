// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as NotesIcon } from "../../../assets/img/icon/notes.svg";

// Import: Elements
import {
  Container,
  EntryContainer,
  Detail,
  Heading,
  Icon,
  Left,
  Right,
  Status,
  Wrapper,
} from "./NotesEntry.elements";

// Import: Components
import { Button, Text } from "../index";

// Component: ReportEntry
export default function ReportEntry({ type, details, status }) {
  return (
    <Container data-testid={"reportEntry"}>
      <Wrapper>
        <EntryContainer>
          <Left>
            <Heading>
              <Icon>
                <NotesIcon />
              </Icon>
              <h3>{type ? type : "Type"}</h3>
            </Heading>

            <Detail>
              <p>
                {details && details.length > 25
                  ? details.substring(0, 25) + "..."
                  : details && details.length < 25
                  ? details
                  : "Details"}
              </p>
            </Detail>
          </Left>

          <Right>
            <Status>
              <p>{status ? status : "Status"}</p>
            </Status>
          </Right>
        </EntryContainer>
      </Wrapper>
    </Container>
  );
}
