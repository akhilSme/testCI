import { API_BASE_URL, ACCESS_TOKEN } from "../common/constants";
// import axios from "axios";

const request = options => {
  const headers = new Headers();

  if (options.setContentType !== false) {
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
  }

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN),
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + "/login",
    method: "POST",
    body: JSON.stringify(loginRequest)
  });
}

export function signup(signupRequest) {
  return request({
    url: API_BASE_URL + "/signup",
    method: "POST",
    body: JSON.stringify(signupRequest)
  });
}

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const AuthVerify = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
    const decodedJwt = parseJwt(accessToken);

    if (decodedJwt.exp * 1000 < Date.now()) {
      localStorage.clear();
      return false;
    }
    return true;
  }
  return false;
};

export function fetchWeatherDetailsByCity(cityName) {
  return request({
    url: API_BASE_URL + "/weather/city/" + cityName,
    method: "GET"
  });
}

export function fetchWeatherDetailsByUpdatedDate(updatedDate) {
  return request({
    url: API_BASE_URL + "/weather/updatedon/" + updatedDate,
    method: "GET"
  });
}

export function fetchWeatherDetailsByRangeDate(fromDate, toDate) {
  return request({
    url: API_BASE_URL + "/weather/range/" + fromDate + "/" + toDate,
    method: "GET"
  });
}

export function fetchWeatherHistoryDetailsByCity(cityName) {
  return request({
    url: API_BASE_URL + "/weather/history/city/" + cityName,
    method: "GET"
  });
}

export function fetchWeatherHistoryDetailsByUpdatedDate(updatedDate) {
  return request({
    url: API_BASE_URL + "/weather/history/updatedon/" + updatedDate,
    method: "GET"
  });
}

export function fetchWeatherHistoryDetailsByRangeDate(fromDate, toDate) {
  return request({
    url: API_BASE_URL + "/weather/history/range/" + fromDate + "/" + toDate,
    method: "GET"
  });
}

export function archiveWeatherDetailsByRangeDate(fromDate, toDate) {
  return request({
    url: API_BASE_URL + "/admin/weather/archive/range/" + fromDate + "/" + toDate,
    method: "POST"
  });
}

export function archiveWeatherDetailsDeleteByRangeDate(fromDate, toDate) {
  return request({
    url: API_BASE_URL + "/admin/weather/range/" + fromDate + "/" + toDate,
    method: "DELETE"
  });
}

export function deleteUser(userName) {
  return request({
    url: API_BASE_URL + "/admin/users/" + userName,
    method: "DELETE"
  });
}