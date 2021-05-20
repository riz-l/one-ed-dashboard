// Import: Packages
import React from "react";
import moment from "moment";

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
  Status,
  Wrapper,
} from "./NotesEntry.elements";

// Import: Components
import { Display } from "../index";

// Component: ReportEntry
export default function ReportEntry({ dateTime, note, user }) {
  return (
    <Container data-testid={"reportEntry"}>
      <Wrapper>
        <EntryContainer>
          <Left>
            <Heading>
              <Icon>
                <NotesIcon />
              </Icon>
              <h3>
                {dateTime
                  ? moment(dateTime).format(
                      "[Date:] MMMM Do YYYY, [Time:] HH:mm:ss"
                    )
                  : "Date/Time"}
              </h3>
              {/* <h3>{dateTime ? dateTime : "Date/Time"}</h3> */}
            </Heading>
            <Status>
              <Display labelText="User :" left>
                {user === "undefined" ? "N/A" : user ? user : "User"}
              </Display>
            </Status>

            <Detail>
              <p>{note ? note : "Notes"}</p>
            </Detail>
          </Left>
        </EntryContainer>
      </Wrapper>
    </Container>
  );
}
