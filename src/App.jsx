import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailZISWAF from "./pages/DetailZISWAF";
import DetailDonasi from "./pages/DetailDonasi";
import Berita from "./pages/Berita";
import Modal from "./components/Modal";
import Login from "./components/Login";
import Rekening from "./pages/Rekening";
import ModalNotif from "./components/ModalNotif";
import DetailCampaign from "./pages/DetailCampaign";
import PembayaranDonasi from "./pages/PembayaranDonasi";
import MetodePembayaran from "./pages/MetodePembayaran";
import Navbar from "./components/Navbar";
import Pencarian from "./pages/Pencarian";
import Profile from "./pages/Profile";
import DetailBerita from "./pages/DetailBerita";
import { ToastContainer } from "react-toastify";
import TentangKami from "./pages/Lainnya/TentangKami";
import VisiMisi from "./pages/Lainnya/VisiMisi";
import KebijakanMutu from "./pages/Lainnya/KebijakanMutu";
import KebijakanStrategis from "./pages/Lainnya/KebijakanStrategis";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <div className="mb-8">
          <Navbar />
        </div>
        <Routes>
          <Route path="/lazismu" element={<HomePage />}></Route>
          <Route
            path="/lazismu/detailZiska/:detailZISKA"
            element={<DetailZISWAF />}
          ></Route>
          <Route
            path="/lazismu/detailDonasi/:id"
            element={<DetailDonasi />}
          ></Route>
          <Route path="/lazismu/berita/:news" element={<Berita />}></Route>
          <Route
            path="/lazismu/berita/:news/:newsId"
            element={<DetailBerita />}
          ></Route>
          <Route path="/lazismu/rekening/:id" element={<Rekening />}></Route>
          <Route
            path="/lazismu/detailCampaign/:id"
            element={<DetailCampaign />}
          ></Route>
          <Route
            path="/lazismu/pembayaran/:id"
            element={<PembayaranDonasi />}
          ></Route>
          <Route
            path="/lazismu/tentangKami"
            element={<TentangKami />}
          ></Route>
          <Route
            path="/lazismu/visiMisi"
            element={<VisiMisi />}
          ></Route>
          <Route
            path="/lazismu/kebijakan"
            element={<KebijakanMutu />}
          ></Route>
          <Route
            path="/lazismu/strategis"
            element={<KebijakanStrategis />}
          ></Route>
          <Route
            path="/lazismu/pencarian/:pencarian"
            element={<Pencarian />}
          ></Route>
          <Route path="/lazismu/profile" element={<Profile />}></Route>
          <Route
            path="/lazismu/metodePembayaran/:id"
            element={<MetodePembayaran />}
          ></Route>
        </Routes>
        <Modal />
        <ModalNotif />
        <Login />
      </BrowserRouter>
    </>
  );
}

export default App;
