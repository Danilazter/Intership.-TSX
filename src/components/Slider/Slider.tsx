import React from 'react';
import styles from "./Slider.module.css"

// export type SliderImg = {
// const Img1 = <img src="../Assets/Images/ImagesSlider/pic-1.png" alt="Car1" />
// const Img2 = <img src="../Assets/Images/ImagesSlider/pic-2.png" alt="Car2" />
// const Img3 = <img src="../Assets/Images/ImagesSlider/pic-3.png" alt="Car3" />
// const Img4 = <img src="../Assets/Images/ImagesSlider/pic-4.png" alt="Car4" />
// }





const Slider = () => {

    const imageOnLoadHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        console.log(
            `The image with url of ${event.currentTarget.src} has been loaded`
        );
        if (event.currentTarget.className !== "error") {
            event.currentTarget.className = "succes";
        }
    };



    return (
        <div className={styles.Slider}>
            <div className={styles.item}>
                <div className={styles.textBlock}>
                    <h2 className={styles.Heading}>Бесплатный парковка</h2>
                    <p className={styles.Text}>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
                </div>
                <img
                    src="../Assets/Images/ImagesSlider/pic-1.png"
                    onLoad={imageOnLoadHandler}
                    alt="Car1"
                >
                </img>
            </div>
            <div className={styles.item}>
                <div className={styles.textBlock}>
                <h2 className={styles.Heading}>Страховка</h2>
                <p className={styles.Text}>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
                </div>
                    <img
                    src="../Assets/Images/ImagesSlider/pic-2.png"
                    onLoad={imageOnLoadHandler}
                    alt="Car2"
                >
                </img>
            </div>
            <div className={styles.item}>
                <div className={styles.textBlock}>
                <h2 className={styles.Heading}>Бензин</h2>
                <p className={styles.Text}>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
                </div>
                    <img
                    src="../Assets/Images/ImagesSlider/pic-3.png"
                    onLoad={imageOnLoadHandler}
                    alt="Car4"
                    >
                </img>
            </div>
            <div className={styles.item}>
                <div className={styles.textBlock}>
                <h2 className={styles.Heading}>Обслуживание</h2>
                <p className={styles.Text}>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
                </div>
                    <img
                    src="../Assets/Images/ImagesSlider/pic-4.png"
                    onLoad={imageOnLoadHandler}
                    alt="Car4"
                >
                </img>
            </div>

            {/* <a className={styles.previous} onClick={previousSlide()}>&#10094;</a>
            <a className={styles.next} onClick={nextSlide()}  >&#10095;</a> */}

        </div>
    );
};

export default Slider;