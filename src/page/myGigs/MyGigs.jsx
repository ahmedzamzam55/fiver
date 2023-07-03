import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

function MyGigs() {
  const [deletedItems, setDeletedItems] = useState([]);
  const [showAddRow, setShowAddRow] = useState(false);
  const [newRowData, setNewRowData] = useState({
    imageSrc: "",
    title: "",
    price: "",
    sales: "",
  });
  const [visibleGigs, setVisibleGigs] = useState([]);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const handleDelete = (index) => {
    const updatedDeletedItems = [...deletedItems, index];
    setDeletedItems(updatedDeletedItems);

    // إزالة العنصر المحذوف من البيانات المرئية
    const updatedVisibleGigs = visibleGigs.filter((_, i) => i !== index);
    setVisibleGigs(updatedVisibleGigs);
  };

  const handleAddRow = () => {
    setShowAddRow(true);
  };

  const handleNewRowChange = (event) => {
    const { name, value } = event.target;
    setNewRowData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveNewRow = () => {
    const newGig = { ...newRowData };
    setVisibleGigs((prevGigs) => [...prevGigs, newGig]);

    setNewRowData({
      imageSrc: "",
      title: "",
      price: "",
      sales: "",
    });
    setShowAddRow(false);
  };

  const renderTableRows = () => {
    if (visibleGigs.length === 0) {
      return (
        <tr>
          <td colSpan="5">أدخل عنصرًا من فضلك.</td>
        </tr>
      );
    }

    return visibleGigs.map((gig, index) => (
      <tr key={index}>
        <td>
          {deletedItems.includes(index) ? (
            <span>من فضلك أدخل المنتج</span>
          ) : (
            <img
              className="image"
              src={gig.imageSrc}
              alt=""
              onClick={() => handleDelete(index)}
            />
          )}
        </td>
        <td className="text">{deletedItems.includes(index) ? "من فضلك أدخل المنتج" : gig.title}</td>
        <td>{gig.price}</td>
        <td>{gig.sales}</td>
        <td>
          <img
            className="delete"
            src="./imgs/delete.png"
            alt=""
            onClick={() => handleDelete(index)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <React.Fragment>
              <Link to="/add">
                <button>Add New Gig</button>
              </Link>
              <button onClick={handleAddRow}>Add New Row</button>
            </React.Fragment>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {showAddRow && (
              <tr>
                <td>
                  <input
                    type="file"
                    name="imageSrc"
                    value={newRowData.imageSrc}
                    onChange={handleNewRowChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={newRowData.title}
                    onChange={handleNewRowChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="price"
                    value={newRowData.price}
                    onChange={handleNewRowChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="sales"
                    value={newRowData.sales}
                    onChange={handleNewRowChange}
                  />
                </td>
                <td>
                  <button onClick={handleSaveNewRow}>Save</button>
                </td>
              </tr>
            )}
            {renderTableRows()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
