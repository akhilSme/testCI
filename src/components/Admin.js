import React, { useState } from "react";
import {
  archiveWeatherDetailsByRangeDate,
  archiveWeatherDetailsDeleteByRangeDate,
  deleteUser,
} from "../util/ApiUtil";

const Admin = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [archiveFromDate, setArchiveFromDate] = useState("");
  const [archiveToDate, setArchiveToDate] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const isoFromDate = new Date(fromDate).toISOString();
    const isoToDate = new Date(toDate).toISOString();
    archiveWeatherDetailsByRangeDate(isoFromDate, isoToDate)
      .then((response) => {
        setMessage(response);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const handleArchiveDelete = (e) => {
    e.preventDefault();
    const isoFromDate = new Date(archiveFromDate).toISOString();
    const isoToDate = new Date(archiveToDate).toISOString();
    archiveWeatherDetailsDeleteByRangeDate(isoFromDate, isoToDate)
      .then((response) => {
        setMessage(response);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const handleDeleteUser = (e) => {
    e.preventDefault();
    
    deleteUser(username)
      .then((response) => {
        setMessage(response);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  return (
    <div className="container">
      <div className="main-content-area">
        <div className="content-box">
          <div className="sub-heading">Archive Data Date Range</div>
          <form name="form-range-date">
            <label className="title">From:&nbsp;&nbsp;</label>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              style={{ border: "1px solid #000" }}
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            &nbsp;&nbsp;&nbsp;
            <label className="title">To:&nbsp;&nbsp;</label>
            <input
              type="date"
              id="toDate"
              name="toDate"
              style={{ border: "1px solid #000" }}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
            <input
              type="button"
              value="Archive"
              className="archive-button"
              name="archiveButton"
              id="archiveButton"
              onClick={handleChange}
            />
            <div className="success-message">{message}</div>
          </form>
        </div>
        <div className="content-box">
          <div className="sub-heading">Delete User</div>
          <form name="form-range-date">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ display: "block", margin: "0 auto", padding: "0 5px" }}
            />
            <input
              type="button"
              value="Delete"
              className="delete-button"
              name="deleteButton"
              id="deleteButton"
              onClick={handleDeleteUser}
            />
            <div className="success-message">{message}</div>
          </form>
        </div>
        <div className="content-box">
          <div className="sub-heading">Archive Data Delete</div>
          <form name="form-archive-data">
            <label className="title">From:&nbsp;&nbsp;</label>
            <input
              type="date"
              id="archiveFromDate"
              name="archiveFromDate"
              style={{ border: "1px solid #000" }}
              value={archiveFromDate}
              onChange={(e) => setArchiveFromDate(e.target.value)}
            />
            &nbsp;&nbsp;&nbsp;
            <label className="title">To:&nbsp;&nbsp;</label>
            <input
              type="date"
              id="archiveToDate"
              name="archiveToDate"
              style={{ border: "1px solid #000" }}
              value={archiveToDate}
              onChange={(e) => setArchiveToDate(e.target.value)}
            />
            <input
              type="button"
              value="Delete"
              className="archive-button"
              name="archiveDeleteButton"
              id="archiveDeleteButton"
              onClick={handleArchiveDelete}
            />
            <div className="success-message">{message}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
