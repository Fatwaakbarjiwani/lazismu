import qris from "../assets/qris.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowModalPayment } from "../redux/reducers/modalReducer";
import Modalbayar from "../components/Modalbayar";

export default function MetodePembayaran() {
  const dispatch = useDispatch();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [desk, setDesk] = useState("");
  
  const handleAnonymousChange = () => {
    setIsAnonymous(!isAnonymous);
  };
  useEffect(() => {
    if (isAnonymous == true) {
      setName("Hamba Allah");
    } else {
      setName(user?.username || "");
    }
    setPhone(user?.phoneNumber || "");
  }, [user]);



  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center pt-5 font-Inter">
      <Modalbayar />
      <div className="sm:max-w-xl w-full bg-white shadow-lg p-4 sm:p-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">
            Form Pembayaran
          </h1>
        </div>
        <div className="mb-2 sm:mb-4">
          <p className="text-lg font-bold">Pilih Metode Pembayaran</p>
        </div>
        <div className="flex gap-5 w-full border border-gray-300 rounded-lg p-1 mb-6 focus-within:border-primary">
          <img src={qris} className="w-14" alt="QR Code" />
          <div>
            <p className="font-bold text-lg">Pembayaran QR</p>
            <p className="text-sm">
              Bayar dengan aplikasi pembayaran pilihan Anda
            </p>
          </div>
        </div>
        <div className="mb-2 sm:mb-4">
          <p className="text-lg font-bold">Lengkapi Form Dibawah</p>
        </div>
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          <div className="space-y-4">
            {isAnonymous == false && (
              <div>
                <label className="block text-lg font-medium mb-2">Nama</label>
                <input
                  className="w-full border border-gray-300 rounded-lg p-2 text-lg outline-orange-200 "
                  placeholder="Nama"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            {isAnonymous == true && (
              <div>
                <label className="block text-lg font-medium mb-2">Nama </label>
                <p className="text-gray-600 font-medium p-2 rounded-lg border border-gray-300 text-lg">
                  Hamba Allah
                </p>
              </div>
            )}
            <div>
              <label className="block text-lg font-medium mb-2">
                Nomor Handphone
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg p-2 text-lg outline-orange-200 "
                placeholder="Nomor Handphone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={handleAnonymousChange}
                className="h-4 w-4 rounded-md text-primary"
              />
              <label className="ml-2 text-base">
                Sembunyikan nama saya (donasi sebagai hamba Allah)
              </label>
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">
                Pesan Anda
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2 text-lg outline-orange-200 "
                placeholder="Pesan Anda..."
                value={desk}
                onChange={(e) => setDesk(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <button
          onClick={() => dispatch(setShowModalPayment(true))}
          className="mb-20 sm:mb-0 w-full mt-6 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 focus:outline-none focus:ring focus:border-primary"
        >
          Lanjutkan Pembayaran
        </button>
      </div>
    </div>
  );
}
