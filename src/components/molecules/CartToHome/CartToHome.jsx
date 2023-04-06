import React from "react";
import styles from './CartToHome.module.css';
import StylesButton from "../../atoms/ButtonSelect/Button.module.css"
import ButtonSelect from '../../atoms/ButtonSelect/ButtonSelect'
import { CarruselState } from "../../../hooks/useCarrousel";


const CartToHome = ({ Cards }) => {
    const { imageChange, index } = CarruselState(Cards)
    return (
        <div className={styles.container_carrousel}>
            <div className={styles.container_text}>
                <article className={styles.text}>
                    <h2 className={styles.title}>Sed ut perspiciatis unde omnis iste natus</h2>
                    <p className={styles.suTitle}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                    <ButtonSelect style={StylesButton.initialButton}>Read More</ButtonSelect>

                    <div className={styles.container_carrousel}>
                        {
                            Cards.map((item, i) => (
                                <button
                                    key={item.id}
                                    className={item.id === index ? `${styles.carrousel_circle} ${styles.active}` : `${styles.carrousel_circle} ${styles.clase2}`}
                                    onClick={() => imageChange(i)}
                                    onMouseMove={() => imageChange(i)}
                                ></button>
                            ))
                        }
                    </div>
                </article>
            </div>
            <img src={Cards[index].img} alt="Logo" className={styles.img} />
        </div>)
}


export default CartToHome;