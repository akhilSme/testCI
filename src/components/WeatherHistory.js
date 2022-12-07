import React, { useState } from "react";
import $ from "jquery";
import {
  fetchWeatherHistoryDetailsByCity,
  fetchWeatherHistoryDetailsByUpdatedDate,
  fetchWeatherHistoryDetailsByRangeDate,
} from "../util/ApiUtil";

const WeatherHistory = () => {
  const [weatherHistoryDetails, setWeatherHistoryDetails] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  $(function () {
    $("#weatherStatus").on("change", function () {
      $(".weather").hide();
      $("#" + $(this).val()).show();
    });
  });

  const handleChange = (event) => {
    event.preventDefault();
    const cityName = event.target.value;
    fetchWeatherHistoryDetailsByCity(cityName)
      .then((response) => {
        setWeatherHistoryDetails(response);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const handleChangeByUpdatedDate = (event) => {
    const updatedDateOn = new Date(event.target.value).toISOString();
    fetchWeatherHistoryDetailsByUpdatedDate(updatedDateOn)
      .then((response) => {
        setWeatherHistoryDetails(response);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const handleChangeByRangeDate = (event) => {
    setFromDate(event.target.value);
    setToDate(event.target.value);

    if (fromDate !== "" && toDate !== "") {
      const isoFromDate = new Date(fromDate).toISOString();
      const isoToDate = new Date(toDate).toISOString();
      fetchWeatherHistoryDetailsByRangeDate(isoFromDate, isoToDate)
        .then((response) => {
          setWeatherHistoryDetails(response);
        })
        .catch((error) => {
          console.log("Error", error.message);
        });
    }
  };

  return (
    <div className="container">
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ margin: "0 0 0 25px", width: "20%" }}>
          <form name="form-dropdown">
            <select
              name="weatherStatus"
              id="weatherStatus"
              style={{ border: "1px solid #000" }}
            >
              <option value="">-Select-</option>
              <option value="city">City Name</option>
              <option value="dateupdated">Weather By Date Updated</option>
              <option value="daterange">Date Range</option>
            </select>
          </form>
        </div>
        <div style={{ width: "80%" }}>
          <div id="city" style={{ display: "none" }} class="weather">
            <form name="form-city" action="">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                style={{ border: "1px solid #000", padding: "0 5px" }}
                onChange={(e) => handleChange(e)}
              />
            </form>
          </div>
          <div id="dateupdated" style={{ display: "none" }} class="weather">
            <form name="form-updated-date">
              <input
                type="date"
                id="updatedDate"
                name="updatedDate"
                style={{ border: "1px solid #000" }}
                onChange={(e) => handleChangeByUpdatedDate(e)}
              />
            </form>
          </div>
          <div id="daterange" style={{ display: "none" }} class="weather">
            <form name="form-range-date">
              <div>
                <label>From:&nbsp;&nbsp;</label>
                <input
                  type="date"
                  id="fromDate"
                  name="fromDate"
                  style={{ border: "1px solid #000" }}
                  onChange={(e) => handleChangeByRangeDate(e)}
                />
              </div>
              <div style={{ margin: "20px 0 0 23px" }}>
                <label>To:&nbsp;&nbsp;</label>
                <input
                  type="date"
                  id="toDate"
                  name="toDate"
                  style={{ border: "1px solid #000" }}
                  onChange={(e) => handleChangeByRangeDate(e)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="displayTable">
        <table>
          <thead>
            <tr>
              <th>Sunrise</th>
              <th>Sunset</th>
              <th>Min. Temp</th>
              <th>Max. Temp</th>
              <th>Day Temp</th>
              <th>Night Temp</th>
            </tr>
          </thead>
          <tbody>
            {weatherHistoryDetails &&
              weatherHistoryDetails.map((value) => {
                <tr>
                  <td>{value.sunrise}</td>
                  <td>{value.sunset}</td>
                  <td>{value.tempMin}</td>
                  <td>{value.tempMax}</td>
                  <td>{value.tempDay}</td>
                  <td>{value.tempNight}</td>
                </tr>;
              })}
            {weatherHistoryDetails === "" && (
              <tr>
                <td colSpan={6}>
                  <span style={{ color: "#FF0000" }}>
                    Records are not found
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherHistory;
