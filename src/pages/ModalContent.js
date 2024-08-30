import React, { useContext, useState } from "react";
import { Form, useParams } from "react-router-dom";
import useDocTitle from "../hooks/useDocTitle";
import useActive from "../hooks/useActive";
import cartContext from "../contexts/cart/cartContext";
import productsData from "../data/productsData";
import {
  Col,
  FormGroup,
  Input,
  Label,
  FormText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const ModalContent = () => {
  useDocTitle("Add Product");
  const [modal, setModal] = useState(false);

  const { handleActive, activeClass } = useActive(0);

  const { addItem } = useContext(cartContext);

  const { id } = useParams();

  // here the 'id' received has 'string-type', so converting it to a 'Number'
  const prodId = parseInt(id);
  console.log("prodcut Id : ", id);

  // showing the Product based on the received 'id'
  const product = productsData.find((item) => item.id === prodId);

  const {
    title,
    info,
    category,
    finalPrice,
    originalPrice,
    ratings,
    rateCount,
  } = product;

  const handleChange = () => {
    console.log("Nothing doing");
  };
  const handleSubmit = () => {
    console.log("NOthing doing");
  };
  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <>
      {/* <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <ul>
              <FormGroup row>
                <Label for="ProductBrand" sm={2}>
                  Brand
                </Label>
                <Col sm={10}>
                  <Input
                    id="ProductBrand"
                    name="ProductBrand"
                    placeholder="Enter Product Brand"
                    type="text"
                    //   value= {setIsNew ? '' : editedData.Name}
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Productname" sm={2}>
                  Name
                </Label>
                <Col sm={10}>
                  <Input
                    id="Productname"
                    name="Productname"
                    placeholder="Enter Product Name"
                    type="text"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="ProductDesp" sm={2}>
                  Description
                </Label>
                <Col sm={10}>
                  <Input
                    id="ProductDesp"
                    name="ProductDesp"
                    placeholder="Enter Product Description"
                    type="text"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="ProductType" sm={2}>
                  Product Type
                </Label>
                <Col sm={10}>
                  <Input id="ProductType" name="ProductType" type="select">
                    <option value={"Hero"}>Hero</option>
                    <option value={"Featured"}>Featured</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="ProductCategory" sm={2}>
                  Product Category
                </Label>
                <Col sm={10}>
                  <Input
                    id="ProductCategory"
                    name="ProductCategory"
                    type="select"
                    onChange={handleChange}
                  >
                    <option value={"Women Cloth"}>Women Cloth</option>
                    <option value={"Men's Cloth"}>Men's Cloth</option>
                    <option value={"Shoes"}>Shoes</option>
                    <option value={"Bags"}>Bags</option>
                    <option value={"Snikers"}>Snikers</option>
                  </Input>
                </Col>
              </FormGroup>
            </ul>
            <ul>
              <FormGroup row>
                <Label for="ProductFinalPrice" sm={2}>
                  Final Price (PKR)
                </Label>
                <Col sm={10}>
                  <Input
                    id="ProductFinalPrice"
                    name="ProductFinalPrice"
                    placeholder="Enter Final Price"
                    type="number"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="ProductOriginalPrice" sm={2}>
                  Original Price (PKR)
                </Label>
                <Col sm={10}>
                  <Input
                    id="ProductOriginalPrice"
                    name="ProductOriginalPrice"
                    placeholder="Product Original Price"
                    type="number"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleFile" sm={9}>
                  Top File Link
                </Label>
              </FormGroup>
              <FormGroup row>
                <Col sm={5}>
                  <Input
                    id="mainFile"
                    placeholder="Main File"
                    name="file"
                    type="text"
                    onChange={handleChange}
                  />
                </Col>
                <Col sm={5}>
                  <Input
                    id="otherFile1"
                    name="file"
                    onChange={handleChange}
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={5}>
                  <Input
                    id="otherFile2"
                    name="file"
                    onChange={handleChange}
                    type="text"
                  />
                </Col>
                <Col sm={5}>
                  <Input
                    id="otherFile3"
                    name="file"
                    onChange={handleChange}
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={5}>
                  <Input
                    id="otherFile4"
                    name="file"
                    onChange={handleChange}
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={10}>
                  <FormText>
                    This is some placeholder block-level help text for the above
                    input. It‘s a bit lighter and easily wraps to a new line.
                  </FormText>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col
                  sm={{
                    offset: 2,
                    size: 10,
                  }}
                >
                  <Button onClick={handleSubmit}>Submit</Button>
                </Col>
              </FormGroup>
            </ul>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal> */}
    </>
  );
};

export default { ModalContent};
