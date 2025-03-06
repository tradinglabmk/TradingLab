import Image from "next/image";
import whiteLogo from "../../../../public/assets/white-logo.png";
import arrowRight from "../../../../public/assets/arrow-right.png";
import "./NavigationBar.css";

export const NavigationBar = () => {
  return (
    <div className="desktopContainer">
      <Image src={whiteLogo} alt="logo" width={220} />

      <div>
        <p className="navigationItem">Почетна</p>
        <p className="navigationItem">Услуги</p>
        <p className="navigationItem">Што е Forex</p>
        <p className="navigationItem">За нас</p>
      </div>

      <div className="button">
        <div>Закажи разговор</div>
        <Image src={arrowRight} alt="arrowRight" />
      </div>
    </div>
  );
};
