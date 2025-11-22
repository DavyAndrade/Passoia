import React from "react";
import "./redes-sociais.scss";
import instagram from "../../../assets/images/footer/instagram.svg";
import facebook from "../../../assets/images/footer/facebook.svg";
import youtube from "../../../assets/images/footer/youtube.svg";
import twitter from "../../../assets/images/footer/twitter.svg";

export default function RedesSociais() {
  const redesSociais = [
    {
      id: 1,
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: instagram,
    },
    {
      id: 2,
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: facebook,
    },
    {
      id: 3,
      name: "Youtube",
      url: "https://www.youtube.com/",
      icon: youtube,
    },
    {
      id: 4,
      name: "Twitter",
      url: "https://www.twitter.com/",
      icon: twitter,
    },
  ];

  return (
    <section className="redes-sociais">
      <h3 className="redes-sociais__title">SIGA-NOS NAS REDES SOCIAIS</h3>

      <div className="redes-sociais__icons">
        {redesSociais.map((redesSocial) => (
          <a
            key={redesSocial.id}
            href={redesSocial.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={redesSocial.icon} alt={redesSocial.name} />
          </a>
        ))}
      </div>
    </section>
  );
}
