import BussinesServices from "../../molecules/BussinesProducts/BussinesProducts";
import styles from "./ProductosHome.module.css"

const ProductHome = () => {
    return (
        <main className={styles.container_cart}>
            <article className={styles.container_text}>
                <p className={styles.subTitle}>Products</p>
                <h3 className={styles.title}>In eget tortor tempor mollis purus</h3>
            </article>
            <article className={styles.container_cart}>
                <BussinesServices />
            </article>
        </main>
    )
}

export default ProductHome;