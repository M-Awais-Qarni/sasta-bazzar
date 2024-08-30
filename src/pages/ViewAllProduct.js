import React, { useState } from "react";
import useActive from "../hooks/useActive";
import productsData from "../data/productsData";
import { Table } from "reactstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import ModalContent from "./ModalContent";

const TopProducts = () => {
  const [products, setProducts] = useState(productsData);
  const { activeClass, handleActive } = useActive(0);
  const [showComponent, setShowComponent] = useState(false);

  const handleEdit = () => {
    setShowComponent(true);
  };
  // making a unique set of product's category
  const productsCategory = [
    "All",
    ...new Set(productsData.map((item) => item.category)),
  ];

  // handling product's filtering
  const handleProducts = (category, i) => {
    if (category === "All") {
      setProducts(productsData);
      handleActive(i);
      return;
    }

    const filteredProducts = productsData.filter(
      (item) => item.category === category
    );
    setProducts(filteredProducts);
    handleActive(i);
  };

  return (
    <>
          {showComponent && <ModalContent />}

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
                        <button className="btn-info" onClick={handleEdit}>
                          <AiFillEdit />
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
    </>
  );
};

export default TopProducts;
