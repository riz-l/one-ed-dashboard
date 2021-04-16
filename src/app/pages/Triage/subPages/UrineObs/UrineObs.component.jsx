// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./UrineObs.elements";

// Import: Components
import { Form, Grid, } from "../../../../components";

// SubPage: UrineObs
export default function UrineObs() {
  return (
    <>
      <Container data-testid={"urineObs"}>
        <Wrapper>

        <Form>
          <Form.Text as="h2" heading>Urine Obs</Form.Text>

          <Grid>
            <Grid.Column>
            <Grid.Item> <Form.Checkbox text="NAD"/></Grid.Item>
            <Grid.Item> <Form.Dropdown labelText="Leu"/></Grid.Item>
            <Grid.Item> <Form.Dropdown labelText="Pro"/></Grid.Item>
            <Grid.Item> <Form.Dropdown labelText="Bld"/></Grid.Item>
            
            </Grid.Column>
            
            <Grid.Column>
            <Grid.Item> <Form.Dropdown labelText="Glu"/></Grid.Item>
            <Grid.Item> <Form.Dropdown labelText="Leu"/></Grid.Item>
            <Grid.Item> <Form.Dropdown labelText="Nit"/></Grid.Item> 
            <Grid.Item> <Form.Dropdown labelText="Ket"/></Grid.Item>
            </Grid.Column>
          </Grid>
        </Form>
         
        </Wrapper>
      </Container>
    </>
  );
}
