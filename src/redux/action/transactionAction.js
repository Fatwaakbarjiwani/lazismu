import axios from "axios";

export const SERVER = import.meta.env.Server_Key;

export const transaksi =
  (id, jumlahPembayaran, jumlahDonasi, vaNumber) => async (dispatch) => {
    try {
      const SERVER_KEY = SERVER;
      const AUTH_STRING = btoa(`${SERVER_KEY}:`);

      // Kirim data transaksi yang sesuai
      const response = await axios.post(
        `https://app.sandbox.midtrans.com/snap/v1/transactions`,
        {
          transaction_details: {
            order_id: id, // ID pesanan
            gross_amount: jumlahPembayaran, // Jumlah pembayaran
          },
          customer_details: {
            // Detail pelanggan, jika diperlukan
          },
          item_details: [
            {
              // Detail item pembayaran, jika diperlukan
            },
          ],
          payment_type: "bank_transfer", // Jenis pembayaran yang dipilih, misalnya bank_transfer
          bank_transfer: {
            bank: "bca", // Bank yang dipilih, misalnya BCA
            va_number: vaNumber, // Nomor VA (Virtual Account) yang telah diterbitkan oleh Midtrans
          },
        },
        {
          headers: {
            Authorization: `Basic ${AUTH_STRING}`,
            "Content-Type": "application/json", // Pastikan jenis konten dikonfigurasi dengan benar
          },
        }
      );

      // Tanggapi respons dari Midtrans di sini
      console.log("Response from Midtrans:", response.data);

      // Lakukan tindakan apa pun setelah mendapatkan respons dari Midtrans, misalnya meredirect pengguna ke halaman pembayaran
    } catch (error) {
      console.error("Error fetching campaign data:", error);
    }
  };
