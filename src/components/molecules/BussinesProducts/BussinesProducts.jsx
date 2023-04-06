import styles from "./BussinesProducts.module.css";
import useFetchData from "../../../hooks/useFetchData";

const BussinesServices = () => {
    const { data } = useFetchData()

    return (
        <div className={styles.container_carrousel}>
            <button className={styles.after}>f</button>
            <div className={styles.cart}>
                {
                    data ? (
                        data.Products.map((i) => (
                            <div className={styles.products}>
                                <h4 className={styles.title}>{i.producto}</h4>
                                <ul className={styles.list}>
                                    <li>{i.data1}</li>
                                    <li>{i.data2}</li>
                                    <li>{i.data3}</li>
                                    <li>{i.data4}</li>
                                </ul>

                            </div>
                        ))
                    )
                        : (
                            <h1>Cargando....</h1>
                        )
                }
            </div>
            <button className={styles.before}>f</button>
        </div>
    )
}

export default BussinesServices;