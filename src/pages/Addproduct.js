import React, { useState } from "react";
import Modal from "react-modal";
import { Button, Table } from "reactstrap";
import productsData from "../data/productsData";
// import addnewProduct from "../data/productsData";
import { AiFillDelete, AiFillEdit, AiFillPlusSquare, AiOutlineConsoleSql } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  Col,
  FormGroup,
  Input,
  Label,
  FormText,
  Form,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const AddProduct = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState(productsData);
  const newProductId = Math.max(...products.map((product) => product.id)) + 1;
  const [newproducts, setNewProducts] = useState({
    id: newProductId,
    tag: '',
    tagline: 'Nothing',
    heroImage: '',
    images: [],
    brand: '',
    title: '',
    info: '',
    category: '',
    connectivity: '',
    finalPrice: 0,
    originalPrice: 0,
    quantity: 0,
    ratings: 5,
    rateCount: 5,
    path: "/product-details/",
  });
  const newProduct= [
    {
        id: 20,
        images: [
            "/images/products/sonyxb400-1.png",
            "/images/products/sonyxb400-2.png",
            "/images/products/sonyxb400-3.png",
            "/images/products/sonyxb400-4.png",
        ],
        brand: "Test",
        title: "Test WI-XB400",
        info: "Wireless Extra Bass In-Ear Neckbands",
        category: "Neckbands",
        // type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2690,
        originalPrice: 4990,
        quantity: 1,
        ratings: 474,
        rateCount: 4,
        path: "/product-details/",
    }
];
  
  const handleImageChange = (e, index) => {
    const { value } = e.target;
    const newImages = [...newproducts.images];
    newImages[index] = value;
    setNewProducts({ ...newproducts, images:[...newproducts.images][index]=newImages });
  };
  const toggle = () => setModal(!modal);

  
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
  const openModal = () => {
    setModal(!modal);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleEdit = () => {
    console.log("handle Edit called");
  };
  const handleChange = (event) => {
    console.log("value Changed", event.target.name , event.target.value);
    const { name, value } = event.target;
    setNewProducts({ ...newproducts, [name]: value });
  };
  const handleSubmit = () => {
    console.log("submit Buton called",newProduct[0]);
    // console.log("new Product",newproducts);
    setProducts([...products,JSON.stringify(newproducts)]);
    // location.reload();
    
  // if(productsData.push(newProduct[0]))
  if(productsData.push(JSON.stringify(newProduct)))
  {
    // console.log("Previous : ",products)
    //  setProducts(...products,newproducts);
    // console.log("After : ",products)
    alert("Product Added Successfully !"+JSON.stringify(newproducts)+" Working "+JSON.stringify(newProduct))
    // location.reload();

  }
  else{
    alert("UnSuccessfull Attempt")

  }
  // setProducts([...products,newProduct]);
// 
  };
  return (
    <>
     <Modal className="modal_wrapper" isOpen={modal} toggle={toggle} external={externalCloseBtn}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <ul>
              <FormGroup row >
                <Label for="ProductBrand" sm={3}>
                  Item Id
                </Label>
                <Col sm={10}>
                  <Input
                    id="Productid"
                    name="id"
                    type="text"
                    value={newProductId}
                    disabled="disabled"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="ProductBrand" sm={3}>
                  Brand
                </Label>
                <Col sm={10}>
                  <Input
                    id="ProductBrand"
                    name="brand"
                    placeholder="Enter Product Brand"
                    type="text"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Productname" sm={3}>
                  Name
                </Label>
                <Col sm={10}>
                  <Input
                    id="Productname"
                    name="title"
                    placeholder="Enter Product Name"
                    type="text"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="ProductDesp" sm={3}>
                  Description
                </Label>
                <Col sm={10}>
                  <Input
                    id="ProductDesp"
                    name="info"
                    placeholder="Enter Product Description"
                    type="text"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="ProductType" sm={3}>
                  Product Type
                </Label>
                <Col sm={10}>
                  <Input id="ProductType" onChange={handleChange} name="tag" type="select">
                    <option value={"Hero"}>Hero</option>
                    <option value={"Featured"}>Featured</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="ProductCategory" sm={3}>
                  Product Category
                </Label>
                <Col sm={10}>
                  <Input
                    id="ProductCategory"
                    name="category"
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
             <p>Hello</p>
              <FormGroup row>
                <Label for="ProductFinalPrice" sm={3}>
                  Final Price (PKR)
                </Label>
                <Col sm={10}>
                  <Input
                    id="ProductFinalPrice"
                    name="finalPrice"
                    placeholder="Enter Final Price"
                    type="number"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="ProductOriginalPrice" sm={3}>
                  Original Price (PKR)
                </Label>
                <Col sm={10}>
                  <Input
                    id="ProductOriginalPrice"
                    name="originalPrice"
                    placeholder="Product Original Price"
                    type="number"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Productquantity" sm={3}>
                  Quantity
                </Label>
                <Col sm={10}>
                  <Input
                    id="Productquantity"
                    name="quantity"
                    placeholder="Product Quantity"
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
                    onChange={handleImageChange}
                  />
                </Col>
                <Col sm={5}>
                  <Input
                    id="otherFile1"
                    name="file"
                    onChange={handleImageChange}
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={5}>
                  <Input
                    id="otherFile2"
                    name="file"
                    onChange={handleImageChange}
                    type="text"
                  />
                </Col>
                <Col sm={5}>
                  <Input
                    id="otherFile3"
                    name="file"
                    onChange={handleImageChange}
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={5}>
                  <Input
                    id="otherFile4"
                    name="file"
                    onChange={handleImageChange}
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
                  {/* <Button onClick={onClose}>Close</Button> */}
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
      </Modal>
      <section id="cart" className="section">
        <div className="addcontainer">
          <span className="addnewBtn" onClick={handleSubmit}><AiFillPlusSquare/></span>
          <div className="wrapper all_products_wrapper ">
            {products.slice(0, 1).map((item) => (
              <Table>
                <thead>
                  <tr>
                    <th>S / N</th>
                    <th>Product Name</th>
                    <th>Brand Name</th>
                    <th>Actual Price</th>
                    <th>Dicounted Price</th>
                    <th>Images</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <>
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.title}</td>
                        <td>{item.brand}</td>
                        <td>{item.originalPrice}</td>
                        <td>{item.finalPrice}</td>
                        <td>
                          <img src={item.images[0]}></img>
                        </td>
                        <td className="actions">
                          <div>
                            <button className="btn-info">
                             <Link to={`/editProduct/${item.id}`}>
                              {/* // to={`/editProduct/${item.id}`} */}
                              <AiFillEdit />
                            </Link>
                            </button>
                            <div className="tooltip">Search</div>{" "}
                          </div>
                          <div>
                            <button className="btn-danger" onClick={() => true}>
                              <AiFillDelete />
                            </button>
                            <div className="tooltip">Search</div>{" "}
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </Table>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
