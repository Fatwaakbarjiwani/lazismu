import { createSlice } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";

const key = "secretKey";

const initialState = {
  nominal: getNominalFromLocalStorage(),
  kategori: getKategoriFromLocalStorage(),
  methode: "",
};

function getNominalFromLocalStorage() {
  const encryptedNominal = localStorage.getItem("nominal");
  if (encryptedNominal) {
    // Decrypt nilai nominal sebelum mengembalikannya
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedNominal, key);
      const originalNominal = bytes.toString(CryptoJS.enc.Utf8);
      return originalNominal;
    } catch (error) {
      // Handle kesalahan dekripsi
      console.error("Error decrypting nominal:", error);
      return null;
    }
  }
  return null;
}
function getKategoriFromLocalStorage() {
  const encryptedNominal = localStorage.getItem("nominal");
  if (encryptedNominal) {
    // Decrypt nilai nominal sebelum mengembalikannya
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedNominal, key);
      const originalNominal = bytes.toString(CryptoJS.enc.Utf8);
      return originalNominal;
    } catch (error) {
      // Handle kesalahan dekripsi
      console.error("Error decrypting nominal:", error);
      return null;
    }
  }
  return null;
}

const authSlice = createSlice({
  name: "pembayaran",
  initialState,
  reducers: {
    setNominal: (state, action) => {
      if (action.payload) {
        // Enkripsi nilai nominal sebelum menyimpannya
        const encryptedNominal = CryptoJS.AES.encrypt(
          action.payload,
          key
        ).toString();
        localStorage.setItem("nominal", encryptedNominal);
      } else {
        localStorage.removeItem("nominal");
      }
      state.nominal = action.payload;
    },
    setMethode: (state, action) => {
      state.nominal = action.payload;
    },
    setKategori: (state, action) => {
      if (action.payload) {
        // Enkripsi nilai nominal sebelum menyimpannya
        const encryptedKategori = CryptoJS.AES.encrypt(
          action.payload,
          key
        ).toString();
        localStorage.setItem("kategori", encryptedKategori);
      } else {
        localStorage.removeItem("kategori");
      }
      state.kategori = action.payload;
    },
  },
});

export const { setNominal, setMethode, setKategori } = authSlice.actions;

export default authSlice.reducer;
