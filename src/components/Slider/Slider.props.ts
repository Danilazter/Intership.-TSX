export interface IReview {
    id: number;
    heading: string;
    text: string;
    image?: string;
    image2?: string;
    image3?: string;
    image4?: string;
}

export interface SliderProps {
    reviews: IReview[];
}