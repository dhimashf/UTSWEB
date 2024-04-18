import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login"
import LupaPassword from "./Pages/LupaPassword/LupaPassword";
import DataMahasiswa from "./Pages/DataMahasiswa/DataMahasiswa";
import EditDataMahasiswa from "./Pages/EditDataMahasiswa/EditDataMahasiswa";
import InputPenguji from "./Pages/InputPenguji/InputPenguji";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataDosenPembimbing from "./Pages/DataDosenPembimbing/DataDosenPembimbing";
import DataDosenPenguji from "./Pages/DataDosenPenguji/DataDosenPenguji"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/lupapassword" element={<LupaPassword/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/datamahasiswa" element={<DataMahasiswa/>}/>
          <Route path="/Editdatamahasiswa" element={<EditDataMahasiswa/>}/>
          <Route path="/InputPenguji" element={<InputPenguji/>}/>
          <Route path="/datadosenpembimbing" element={<DataDosenPembimbing/>}/>
          <Route path="/datadosenpenguji" element={<DataDosenPenguji/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
