import axios from "axios";
import { toast } from "react-toastify";
export const VITE_API_URL = import.meta.env.VITE_API_CAREUS;
import "react-toastify/dist/ReactToastify.css";
import {  setBillingId, setNoVa, setPembayaran,  setStatusBilling, setType } from "../reducers/pembayaranReducer";

export const pembayaran =
  (username, phoneNumber, message, transaksiAmount, code, kategori,navigate) =>
  async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      const response = await axios.post(
        `${VITE_API_URL}${
          code == "infak" || code == "wakaf" || code == "zakat"
            ? `/billing/${code}/${kategori}`
            : `/billing/campaign/${code}`
        }`,
        {
          username: username,
          phoneNumber: phoneNumber,
          amount: transaksiAmount,
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      dispatch(setNoVa(data.vaNumber));
      dispatch(setType(data.method));
      dispatch(setBillingId(data.billingId));
      // console.log(data.billingId);
      dispatch(setPembayaran(data));
      navigate(`/lazismu/modalBayar/${code}`);
    } catch (error) {
      toast.error("gagal membuat transaksi");
    } 
  };
export const statusPembayaran = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/billing/success/${id}`);
    dispatch(setStatusBilling(response.data));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};