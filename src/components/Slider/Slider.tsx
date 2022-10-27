import { useState } from 'react';
import { ReactComponent as Arrow } from '../Assets/Images/ImagesSlider/arrow.svg';
import styles from "./Slider.module.css";
import { SliderProps } from './Slider.props';



export const Slider2 = ({ reviews }: SliderProps) => {
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




// const Slider = () => {

//     const imageOnLoadHandler = (
//         event: React.SyntheticEvent<HTMLImageElement, Event>
//     ) => {
//         console.log(
//             `The image with url of ${event.currentTarget.src} has been loaded`
//         );
//         if (event.currentTarget.className !== "error") {
//             event.currentTarget.className = "succes";
//         }
//     };



//     return (
//         <div className={styles.Slider}>
//             <div className={styles.item}>
//                 <div className={styles.textBlock}>
//                     <h2 className={styles.Heading}>Бесплатный парковка</h2>
//                     <p className={styles.Text}>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
//                 </div>
//                 <img
//                     src="../Assets/Images/ImagesSlider/pic-1.png"
//                     onLoad={imageOnLoadHandler}
//                     alt="Car1"
//                 >
//                 </img>
//             </div>
//             <div className={styles.item}>
//                 <div className={styles.textBlock}>
//                 <h2 className={styles.Heading}>Страховка</h2>
//                 <p className={styles.Text}>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
//                 </div>
//                     <img
//                     src="../Assets/Images/ImagesSlider/pic-2.png"
//                     onLoad={imageOnLoadHandler}
//                     alt="Car2"
//                 >
//                 </img>
//             </div>
//             <div className={styles.item}>
//                 <div className={styles.textBlock}>
//                 <h2 className={styles.Heading}>Бензин</h2>
//                 <p className={styles.Text}>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
//                 </div>
//                     <img
//                     src="../Assets/Images/ImagesSlider/pic-3.png"
//                     onLoad={imageOnLoadHandler}
//                     alt="Car4"
//                     >
//                 </img>
//             </div>
//             <div className={styles.item}>
//                 <div className={styles.textBlock}>
//                 <h2 className={styles.Heading}>Обслуживание</h2>
//                 <p className={styles.Text}>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
//                 </div>
//                     <img
//                     src="../Assets/Images/ImagesSlider/pic-4.png"
//                     onLoad={imageOnLoadHandler}
//                     alt="Car4"
//                 >
//                 </img>
//             </div>

//             {/* <a className={styles.previous} onClick={previousSlide()}>&#10094;</a>
//             <a className={styles.next} onClick={nextSlide()}  >&#10095;</a> */}

//         </div>
//     );
// };

// export default Slider;