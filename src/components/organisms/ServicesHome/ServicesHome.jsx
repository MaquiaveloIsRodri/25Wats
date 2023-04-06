import CartToService from "../../molecules/CartToService/CartToService"
import style from "./ServicesHome.module.css"

const ServicesHome = () => {
    return (
        <main className={style.container_main}>
            <article className={style.container_titles}>
                <h3 className={style.title}>Services</h3>
                <p className={style.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida felis, id tempor ex. Suspendisse congue purus eu neque auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,</p>
            </article>
            <article className={style.container_services}>
                <CartToService />
            </article>
        </main>)
}


export default ServicesHome;