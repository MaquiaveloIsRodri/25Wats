import { cartService } from "../../../content/Content";
import styles from "./CartToService.module.css"

const CartToService = () => {

    return (
        <div className={styles.container_services}>
            {
                cartService.map((item) => (
                    <div key={item.id} className={styles.cart} id={item.id}>
                        <div className={styles.container_img}>
                            <img src={item.icon} alt="" className={styles.img} />
                        </div>
                        <p className={styles.text}>{item.text}</p>
                    </div>
                ))
            }
        </div>
    )

}


export default CartToService;