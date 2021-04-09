// Import: Packages
import React, { useState, useEffect } from "react";

// Import: Elements
import { Container, Wrapper } from "./Details.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: Details
export default function Details({ db }) {
  // State: detailsForm
  const [detailsForm, setDetailsForm] = useState({
    name: "",
    dateOfBirth: "",
    age: 0,
    gender: "",
    nhsNo: "",
    addressLineOne: "",
    addressLineTwo: "",
    addressLineThree: "",
    addressLineFour: "",
    addressPostcode: "",
    contactOne: "",
    contactTwo: "",
    contactThree: "",
    contactFour: "",
  });

  // Effect: Set detailsForm values to === values.ODetails
  // ... if no values are in the database, set values === ""
  useEffect(() => {
    // Create database store
    db.version(1).stores({ formData: "id, value" });

    // Read/write transaction on new database store
    db.transaction("rw", db.formData, async () => {
      // Get all detailsForm values from database data
      const dbName = await db.formData.get("name");
      const dbDateOfBirth = await db.formData.get("dateOfBirth");
      const dbAge = await db.formData.get("age");
      const dbGender = await db.formData.get("gender");
      const dbNhsNo = await db.formData.get("nhsNo");
      const dbAddressLineOne = await db.formData.get("addressLineOne");
      const dbAddressLineTwo = await db.formData.get("addressLineTwo");
      const dbAddressLineThree = await db.formData.get("addressLineThree");
      const dbAddressLineFour = await db.formData.get("addressLineFour");
      const dbAddressPostcode = await db.formData.get("addressPostcode");
      const dbContactOne = await db.formData.get("contactOne");
      const dbContactTwo = await db.formData.get("contactTwo");
      const dbContactThree = await db.formData.get("contactThree");
      const dbContactFour = await db.formData.get("contactFour");

      // If the detailsForm values have not been added, populate with ""
      if (!dbName) await db.formData.add({ id: "name", value: "" });
      if (!dbDateOfBirth)
        await db.formData.add({ id: "dateOfBirth", value: "" });
      if (!dbAge) await db.formData.add({ id: "age", value: 0 });
      if (!dbGender) await db.formData.add({ id: "gender", value: "" });
      if (!dbNhsNo) await db.formData.add({ id: "nhsNo", value: "" });
      if (!dbAddressLineOne)
        await db.formData.add({ id: "addressLineOne", value: "" });
      if (!dbAddressLineTwo)
        await db.formData.add({ id: "addressLineTwo", value: "" });
      if (!dbAddressLineThree)
        await db.formData.add({ id: "addressLineThree", value: "" });
      if (!dbAddressLineFour)
        await db.formData.add({ id: "addressLineFour", value: "" });
      if (!dbAddressPostcode)
        await db.formData.add({ id: "addressPostcode", value: "" });
      if (!dbContactOne) await db.formData.add({ id: "contactOne", value: "" });
      if (!dbContactTwo) await db.formData.add({ id: "contactTwo", value: "" });
      if (!dbContactThree)
        await db.formData.add({ id: "contactThree", value: "" });
      if (!dbContactFour)
        await db.formData.add({ id: "contactFour", value: "" });

      // Set the initial values
      setDetailsForm({
        name: dbName ? dbName.value : "",
        dateOfBirth: dbDateOfBirth ? dbDateOfBirth.value : "",
        age: dbAge ? dbAge.value : 0,
        gender: dbGender ? dbGender.value : "",
        nhsNo: dbNhsNo ? dbNhsNo.value : "",
        addressLineOne: dbAddressLineOne ? dbAddressLineOne.value : "",
        addressLineTwo: dbAddressLineTwo ? dbAddressLineTwo.value : "",
        addressLineThree: dbAddressLineThree ? dbAddressLineThree.value : "",
        addressLineFour: dbAddressLineFour ? dbAddressLineFour.value : "",
        addressPostcode: dbAddressPostcode ? dbAddressPostcode.value : "",
        contactOne: dbContactOne ? dbContactOne.value : "",
        contactTwo: dbContactTwo ? dbContactTwo.value : "",
        contactThree: dbContactThree ? dbContactThree.value : "",
        contactFour: dbContactFour ? dbContactFour.value : "",
      });
    }).catch((error) => {
      console.log(error.stack || error);
      throw new Error(error.stack || error);
    });

    // Close the database connection if Details is unmounted
    // ... or if the database connection changes
    return () => db.close();
  }, [db]);

  // Sets the values in the store and in the state
  const setFormValues = (id) => (value, checked) => {
    // Update store
    db.formData.put({ id, value, checked });

    // Update state
    setDetailsForm((prevFormValues) => ({
      ...prevFormValues,
      [id]: value,
      checked,
    }));
  };

  // Partial application to make on change handler easier to apply
  // ... used for text inputs
  const handleSetFormValues = (id) => (e) => setFormValues(id)(e.target.value);

  // When detailsForm is submitted, prevent default action
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormValues("name")("");
  //   setFormValues("dateOfBirth")("");
  //   setFormValues("age")(0);
  //   setFormValues("gender")("");
  //   setFormValues("nhsNo")("");
  //   setFormValues("addressLineOne")("");
  //   setFormValues("addressLineTwo")("");
  //   setFormValues("addressLineThree")("");
  //   setFormValues("addressLineFour")("");
  //   setFormValues("addressPostcode")("");
  //   setFormValues("contactOne")("");
  //   setFormValues("contactTwo")("");
  //   setFormValues("contactThree")("");
  //   setFormValues("contactFour")("");
  // };

  // Delete IndexedDB ODetails database
  function pleaseDelete() {
    indexedDB.deleteDatabase("ODetails").onsuccess = function () {
      console.log("PODetails Delete Successful");
    };
  }

  // Delete IndexedDB data on browser/tab close and/or refresh
  // ... prompts user that they are about to leave the page/lose data
  // window.addEventListener("beforeunload", () => pleaseDelete());
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "Are you sure you want to close?";
    pleaseDelete();
  });

  return (
    <>
      <Container data-testid={"details"}>
        <Wrapper>
          <Text heading as="h2">
            Details
          </Text>

          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="name"
                    onChange={handleSetFormValues("name")}
                    labelText="Name"
                    type="text"
                    value={detailsForm.name}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="dateOfBirth"
                    onChange={handleSetFormValues("dateOfBirth")}
                    labelText="Date of Birth"
                    type="date"
                    value={detailsForm.dateOfBirth}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="age"
                    onChange={handleSetFormValues("age")}
                    labelText="Age (Years)"
                    type="number"
                    value={detailsForm.age}
                    width="80px"
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="gender"
                    onChange={handleSetFormValues("gender")}
                    labelText="Gender"
                    type="text"
                    value={detailsForm.gender}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="nhsNo"
                    labelText="NHS No."
                    onChange={handleSetFormValues("nhsNo")}
                    type="text"
                    value={detailsForm.nhsNo}
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="addressLineOne"
                    onChange={handleSetFormValues("addressLineOne")}
                    labelText="Address"
                    placeholder="Address line 1"
                    type="text"
                    value={detailsForm.addressLineOne}
                  />
                  <Form.Input
                    htmlFor="addressLineTwo"
                    onChange={handleSetFormValues("addressLineTwo")}
                    placeholder="Address line 2"
                    type="text"
                    value={detailsForm.addressLineTwo}
                  />
                  <Form.Input
                    htmlFor="addressLineThree"
                    onChange={handleSetFormValues("addressLineThree")}
                    placeholder="Address line 3"
                    type="text"
                    value={detailsForm.addressLineThree}
                  />
                  <Form.Input
                    htmlFor="addressLineFour"
                    onChange={handleSetFormValues("addressLineFour")}
                    placeholder="Address line 4"
                    type="text"
                    value={detailsForm.addressLineFour}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="addressPostcode"
                    onChange={handleSetFormValues("addressPostcode")}
                    type="text"
                    value={detailsForm.addressPostcode}
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Input
                    htmlFor="contactOne"
                    onChange={handleSetFormValues("contactOne")}
                    labelText="Contaact 1"
                    value={detailsForm.contactOne}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="contactTwo"
                    onChange={handleSetFormValues("contactTwo")}
                    labelText="Contaact 2"
                    value={detailsForm.contactTwo}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="contactThree"
                    onChange={handleSetFormValues("contactThree")}
                    labelText="Contaact 3"
                    value={detailsForm.contactThree}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="contactFour"
                    onChange={handleSetFormValues("contactFour")}
                    labelText="Contaact 4"
                    value={detailsForm.contactFour}
                  />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
