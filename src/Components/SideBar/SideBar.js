import React from "react";
import "../../styles/sidebar.scss";

function SideBar() {
  const clubs = [
    {
      link: "https://www.adanademirspor.com.tr",
      image: require("../../Assets/Clubs/ads.png"),
      name: "adana",
    },
    {
      link: "https://www.alanyaspor.org.trr",
      image: require("../../Assets/Clubs/ala.png"),
      name: "alanya",
    },
    {
      link: "https://ankaragucu.org.tr",
      image: require("../../Assets/Clubs/ank.png"),
      name: "ankara",
    },
    {
      link: "https://www.antalyaspor.com.tr/tr",
      image: require("../../Assets/Clubs/ant.png"),
      name: "antalya",
    },
    {
      link: "https://www.bjk.com.tr",
      image: require("../../Assets/Clubs/bjk.png"),
      name: "beşiktaş",
    },
    {
      link: "https://www.caykurrizespor.org.tr",
      image: require("../../Assets/Clubs/rize.png"),
      name: "rizespor",
    },
    {
      link: "https://www.karagumruk.com",
      image: require("../../Assets/Clubs/ftk.png"),
      name: "fatih karagümrük",
    },
    {
      link: "https://www.fenerbahce.org",
      image: require("../../Assets/Clubs/fb.png"),
      name: "fenerbahçe",
    },
    {
      link: "https://www.galatasaray.org",
      image: require("../../Assets/Clubs/gs.png"),
      name: "galatasaray",
    },
    {
      link: "https://www.gaziantepfk.org",
      image: require("../../Assets/Clubs/gfk.png"),
      name: "gaziantep",
    },
    {
      link: "https://www.hatayspor.org.tr",
      image: require("../../Assets/Clubs/hty.png"),
      name: "hatayspor",
    },
    {
      link: "https://www.ibfk.com.tr",
      image: require("../../Assets/Clubs/bşk.png"),
      name: "başakşehir",
    },
    {
      link: "https://www.istanbulspor.com.tr",
      image: require("../../Assets/Clubs/ist.png"),
      name: "istanbulspor",
    },
    {
      link: "https://www.kasimpasa.com.tr",
      image: require("../../Assets/Clubs/kas.png"),
      name: "kasımpaşa",
    },
    {
      link: "https://www.kayserispor.org.tr",
      image: require("../../Assets/Clubs/kay.png"),
      name: "kayseri",
    },
    {
      link: "https://www.konyaspor.org.tr",
      image: require("../../Assets/Clubs/kon.png"),
      name: "konya",
    },
    {
      link: "https://www.pendikspor.org.tr",
      image: require("../../Assets/Clubs/pen.png"),
      name: "pendik",
    },
    {
      link: "https://www.samsunspor.org.tr",
      image: require("../../Assets/Clubs/sms.png"),
      name: "samsun",
    },
    {
      link: "https://www.sivasspor.org.tr",
      image: require("../../Assets/Clubs/svs.png"),
      name: "sivas",
    },
    {
      link: "https://www.trabzonspor.org.tr",
      image: require("../../Assets/Clubs/ts.png"),
      name: "trabzon",
    }
  ];

  return (
    <nav className="sidebar">
      <div className="line" />
      <div className="clubs">
        {clubs.map((club) => (
          <a target="_blank" rel="noopener noreferrer" href={club.link}>
            <img className="club-logo" src={club.image} alt={club.name} />
          </a>
        ))}
      </div>
      <div className="line" />
    </nav>
  );
}

export default SideBar;
