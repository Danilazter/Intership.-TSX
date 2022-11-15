import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../Assets/Images/ImagesSlider/arrow.svg';
import styles from "./Slider.module.css";
import { ISliderProps } from './Slider.props';
import { PaginationContainer } from '../Pagination/PaginationContainer';
import {IPaginProps } from '../Pagination/Pagination';

const FADE_DURATION = 300;

export const Slider = ({ reviews }: ISliderProps, { pagin }: IPaginProps) => {
    const [slide, setSlide] = useState<number>(0);
    const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');
    const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();

 
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
        <div className={styles.slider}>
            <div className={`${styles.slide} ${styles[fadeState]}`}
                style={{ backgroundImage: `url(${reviews[slide].image0}), url(${reviews[slide].image1}), url(${reviews[slide].image2}), url(${reviews[slide].image3})`, transitionDuration: `${FADE_DURATION}ms` }}
                
            >
                <div className={styles.textBlock}>
                    <div className={styles.heading}>{reviews[slide].heading}</div>
                    <div className={styles.text}>{reviews[slide].text}</div>
                    <div className={styles.button}>

                        { slide === 0 &&
                            <button
                                className={styles.slideButton}
                            >Подробнее</button>}
                        
                        { slide === 1 &&
                            <button
                                className={`${styles.slideButton} ${styles.slideButtonBlue}`}
                            >Подробнее</button>}
                        
                        { slide === 2 &&
                            <button
                                className={`${styles.slideButton} ${styles.slideButtonPink}`}
                            >Подробнее</button>}

                        {slide === 3 &&
                            <button
                                className={`${styles.slideButton} ${styles.slideButtonPurple}`}
                            >Подробнее</button>}
                    </div>
                    <div>
                        <PaginationContainer
                        />
                    </div>
                </div>
                <div className={styles.sliderButtons}>
                    {slide > 0 && <button className={styles.previous} onClick={() => handlerClick(-1)}>
                        <Arrow className={styles.Arrow} />
                    </button>}
                    {slide < reviews.length - 1 && <button className={styles.next} onClick={() => handlerClick(+1)
                    }>
                        <Arrow className={styles.Arrow} />
                    </button>}
                </div>
            </div>
        </div>
    );
};


