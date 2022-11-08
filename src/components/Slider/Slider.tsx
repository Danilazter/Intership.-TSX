import { useState } from 'react';
import { ReactComponent as Arrow } from '../Assets/Images/ImagesSlider/arrow.svg';
import styles from "./Slider.module.css";
import { SliderProps } from './Slider.props';


const FADE_DURATION = 300;

export const Slider = ({ reviews }: SliderProps) => {
    const [slide, setSlide] = useState<number>(0);
    const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');
    const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();

    const handlerClick = (move: number) => {
        const timer = setTimeout(() => { 
            setSlide(s => s + move);
            setFadeState('fade-in')
        }, FADE_DURATION);
        clearTimeout(currentTimer)
        setFadeState('fade-out')
            setCurrentTimer(timer)
    }

    return (
        <div className={styles.slider}>
            <div className={styles.slide} 
                style={{ backgroundImage: `url(${reviews[slide].image})`, transitionDuration: `${FADE_DURATION}ms` }}
                
            >
            <div className={styles.textBlock}>
                    <div className={styles.heading}>{reviews[slide].heading}</div>
                    <div className={styles.text}>{reviews[slide].text}</div>
                    <button className={styles.slideButton}>Подробнее</button>
                </div>
                <div className={styles.sliderButtons}>
                    {slide > 0 && <button className={styles.previous} onClick={() => handlerClick(-1)}>
                        <Arrow className={styles.Arrow} />
                    </button>}
                    {slide < reviews.length - 1 && <button className={styles.next} onClick={() => handlerClick(+1)}>
                        <Arrow className={styles.Arrow} />
                    </button>}
                    </div>
            </div>
            
        </div>
    );
};


