// Import: Packages
import axios from "axios";

// Access .env variables
const apiGetPatientList = process.env.REACT_APP_GET_PATIENT_LIST;

// GET: getPatientList
export const getPatientList = axios.create({
  baseURL: `${apiGetPatientList}`,
  headers: {
    accept: "application/json",
    "Authorization-Token": "22222",
  },
});
