import axios from "axios";

const API_URL = "http://localhost:5000";

export const getAbsensi = () => axios.get(`${API_URL}/absensi`);
export const createAbsensi = (data) => axios.post(`${API_URL}/absensi`, data);
export const updateAbsensi = (id, data) => axios.put(`${API_URL}/absensi/${id}`, data);
export const deleteAbsensi = (id) => axios.delete(`${API_URL}/absensi/${id}`);
export const getAbsensiById = (id) => axios.get(`${API_URL}/absensi/${id}`);



