import { useState } from 'react';
import { ReactComponent as Arrow } from '../Assets/Images/ImagesSlider/arrow.svg';
import styles from "./Slider.module.css";
import { SliderProps } from './Slider.props';



export const Slider = ({ reviews }: SliderProps) => {
    const [slide, setSlide] = useState<number>(0);
    return (
        <div className={styles.slider}>
            <div className={styles.slide}
                style={{ backgroundImage: `url(${reviews[slide].image})` }}
                
            >
            <div className={styles.textBlock}>
                    <div className={styles.heading}>{reviews[slide].heading}</div>
                    <div className={styles.text}>{reviews[slide].text}</div>
                    <button className={styles.slideButton}>Подробнее</button>
                </div>
                <div className={styles.sliderButtons}>
                <button className={styles.previous}>
                <Arrow className={styles.Arrow} />
            </button>
            <button className={styles.next}>
                <Arrow className={styles.Arrow} />
                    </button>
                    </div>
            </div>
            
        </div>
    );
};


