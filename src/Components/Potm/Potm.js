import React from "react";
import "../../styles/potm.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Potm() {
  const nominees = [
    {
      name: "Ferdi Kadıoğlu",
      team: "Fenerbahçe",
      img: "https://fenerkolik.org/haber/resimler/23701-f1zfvnweayarnk.jpg",
    },
    {
      name: "Rachid Ghezzal",
      team: "Beşiktaş",
      img: "https://iaspr.tmgrup.com.tr/album/2023/01/24/1674552489766.jpg",
    },
    {
      name: "Lucas Torreira",
      team: "Galatasaray",
      img: "https://pbs.twimg.com/media/FubJU1AWYAEjS-P.jpg:large",
    },
    {
      name: "Uğurcan Çakır",
      team: "Trabzonspor",
      img: "https://tmssl.akamaized.net/images/foto/galerie/ugurcan-cakir-trabzonspor-1635848014-73988.jpg?lm=1635848025",
    },
  ];

  const notify = () => toast("Oyunuz alındı");

  return (
    <>
      {nominees.map((nominee) => (
        <div className="potm" onClick={notify}>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme="dark"
          />
          <img src={nominee.img} alt="potm1" />
          <div className="overlay">
            <p>{nominee.name}</p>
            <p>{nominee.team}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Potm;
