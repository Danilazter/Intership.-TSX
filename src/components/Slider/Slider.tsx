import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../Assets/Images/ImagesSlider/arrow.svg';
import styles from "./Slider.module.css";
import { ISliderProps } from './Slider.props';

const FADE_DURATION = 300;

export const Slider = ({ reviews }: ISliderProps) => {
    const [slide, setSlide] = useState<number>(0);
    const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');
    const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();

 
    const handlerClickPagin = (move: number) => {
        const timer = setTimeout(() => {
            setSlide(move);
            setFadeState('fade-in');
        }, FADE_DURATION);
        clearTimeout(currentTimer)
        setFadeState('fade-out')
        setCurrentTimer(timer)
    }

    
    const handlerClick = (move: number) => {
        const timer = setTimeout(() => {
            setSlide(s => s + move);
            setFadeState('fade-in');
        }, FADE_DURATION);
        clearTimeout(currentTimer)
        setFadeState('fade-out')
        setCurrentTimer(timer)
    }

    

    return (
        <div className={styles.slider}
        >
            <div className={`${styles.slide} ${styles[fadeState]}`}
                // style={{ backgroundImage: `url(${reviews[slide].image0}), url(${reviews[slide].image1}), url(${reviews[slide].image2}), url(${reviews[slide].image3})`, transitionDuration: `${FADE_DURATION}ms` }}
                style={{ backgroundImage: `url(${reviews[slide].image})`, transitionDuration: `${FADE_DURATION}ms` }}
                
            >
                <div className={styles.textBlock}>
                    <div className={styles.heading}>{reviews[slide].heading}</div>
                    <div className={styles.text}>{reviews[slide].text}</div>
                    <div className={styles.button}>

                            <button
                            className={`${styles.slideButton} ${styles[`slideButton${slide}`]}`}
                            >Подробнее</button>
        </div>
                    <div>
                        <ul className={styles.paginList}>{
                            reviews.map((item) => {
                                return <li className= {`${styles.paginItem} ${slide === item.id && styles.paginItemActive}`} key={item.id} onClick={() => handlerClickPagin(item.id)}></li>
                            })
                        }
                        </ul>
                    </div>
                </div>
                <div className={styles.sliderButtons}>
                    {slide > 0 && <button className={styles.previous} onClick={() => handlerClick(-1)}>
                        <Arrow className={styles.arrow} />
                    </button>}
                    {slide < reviews.length - 1 && <button className={styles.next} onClick={() => handlerClick(+1)
                    }>
                        <Arrow className={styles.arrow} />
                    </button>}
                </div>
            </div>
        </div>
    );
};


