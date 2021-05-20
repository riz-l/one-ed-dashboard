// Import: Packages
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPreviousNotes } from "../../../../../redux/slices/clinicalNotesSlice";

// Import: Elements
import { Container, Wrapper } from "./Notes.elements";

// Import: Components
import { Form, NotesEntry, Text } from "../../../../components";

// SubPage: Notes
export default function Notes() {
  const dispatch = useDispatch();

  // Effect:
  useEffect(() => {
    dispatch(getPreviousNotes());
  }, []);

  return (
    <>
      <Container data-testid={"notes"}>
        <Wrapper>
          <Text as="h2" heading>
            Notes
          </Text>

          <Form>
            <Form.TextArea
              htmlFor="enterObservationNote"
              labelText="Enter observation note..."
              rows="8"
            />
          </Form>

          <Text as="h3" subheading>
            Previous Notes
          </Text>

          <NotesEntry
            dateTime="19th May 2021, 16:39"
            note="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac elit a mi porttitor imperdiet. In tincidunt, ex et malesuada sodales, sem diam viverra lacus, id tincidunt turpis sapien non diam. Donec feugiat pulvinar dui et ultricies. Maecenas non leo ligula. Aliquam vitae magna non orci bibendum ultricies. Curabitur vestibulum bibendum ligula et luctus. Pellentesque ac fermentum tortor, et mollis nisi. Aenean ullamcorper nisl at nisl vestibulum semper. Phasellus viverra ac odio in viverra. Aenean iaculis efficitur lectus in pellentesque. Nam pharetra feugiat ultricies. Donec ac iaculis lectus, eget tristique massa. Nullam congue nunc elit, nec gravida turpis vestibulum et. Vivamus finibus ipsum vitae nibh interdum venenatis. Proin sed fringilla enim, sit amet condimentum mauris."
            user="LAYTON Josh"
          />

          <NotesEntry
            dateTime="19th May 2021, 16:39"
            note="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac elit a mi porttitor imperdiet. In tincidunt, ex et malesuada sodales, sem diam viverra lacus, id tincidunt turpis sapien non diam. Donec feugiat pulvinar dui et ultricies. Maecenas non leo ligula. Aliquam vitae magna non orci bibendum ultricies. Curabitur vestibulum bibendum ligula et luctus. Pellentesque ac fermentum tortor, et mollis nisi. Aenean ullamcorper nisl at nisl vestibulum semper. Phasellus viverra ac odio in viverra. Aenean iaculis efficitur lectus in pellentesque. Nam pharetra feugiat ultricies. Donec ac iaculis lectus, eget tristique massa. Nullam congue nunc elit, nec gravida turpis vestibulum et. Vivamus finibus ipsum vitae nibh interdum venenatis. Proin sed fringilla enim, sit amet condimentum mauris."
            user="LAYTON Josh"
          />

          <NotesEntry
            dateTime="19th May 2021, 16:39"
            note="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac elit a mi porttitor imperdiet. In tincidunt, ex et malesuada sodales, sem diam viverra lacus, id tincidunt turpis sapien non diam. Donec feugiat pulvinar dui et ultricies. Maecenas non leo ligula. Aliquam vitae magna non orci bibendum ultricies. Curabitur vestibulum bibendum ligula et luctus. Pellentesque ac fermentum tortor, et mollis nisi. Aenean ullamcorper nisl at nisl vestibulum semper. Phasellus viverra ac odio in viverra. Aenean iaculis efficitur lectus in pellentesque. Nam pharetra feugiat ultricies. Donec ac iaculis lectus, eget tristique massa. Nullam congue nunc elit, nec gravida turpis vestibulum et. Vivamus finibus ipsum vitae nibh interdum venenatis. Proin sed fringilla enim, sit amet condimentum mauris."
            user="LAYTON Josh"
          />

          <NotesEntry
            dateTime="19th May 2021, 16:39"
            note="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac elit a mi porttitor imperdiet. In tincidunt, ex et malesuada sodales, sem diam viverra lacus, id tincidunt turpis sapien non diam. Donec feugiat pulvinar dui et ultricies. Maecenas non leo ligula. Aliquam vitae magna non orci bibendum ultricies. Curabitur vestibulum bibendum ligula et luctus. Pellentesque ac fermentum tortor, et mollis nisi. Aenean ullamcorper nisl at nisl vestibulum semper. Phasellus viverra ac odio in viverra. Aenean iaculis efficitur lectus in pellentesque. Nam pharetra feugiat ultricies. Donec ac iaculis lectus, eget tristique massa. Nullam congue nunc elit, nec gravida turpis vestibulum et. Vivamus finibus ipsum vitae nibh interdum venenatis. Proin sed fringilla enim, sit amet condimentum mauris."
            user="LAYTON Josh"
          />
        </Wrapper>
      </Container>
    </>
  );
}
