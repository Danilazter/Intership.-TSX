export interface IReview {
    id: number;
    heading: string;
    text: string;
    image0?: string;
    image1?: string;
    image2?: string;
    image3?: string;
}

export interface ISliderProps {
    reviews: IReview[];
}