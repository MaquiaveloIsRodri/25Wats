import ButtonSelect from "../../atoms/ButtonSelect/ButtonSelect"
import stylesButton from "../../atoms/ButtonSelect/Button.module.css";
import style from "./AboutUs.module.css"
import img from "../../../assets/img/AboutUs.png"

const AboutUs = () => {
    return (
        <div className={style.container__content}>
            <span className={style.decoration}></span>
            <div className={style.container_img}>
                <img src={img} alt="aboutUs" className={style.img} />
            </div>
            <div className={style.container_text}>
                <h3 className={style.title}>About us <br /><span>We Help Businesses</span></h3>
                <p className={style.subtitle}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergre
                    n, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit a
                    met, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam erat.
                </p>
                <ButtonSelect style={stylesButton.initialButton}>More info</ButtonSelect>
            </div>
        </div>
    )

}


export default AboutUs