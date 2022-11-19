export interface IReview {
    id: number;
    heading: string;
    text: string;
    image?: string;
    // image1?: string;
    // image2?: string;
    // image3?: string;
}

export interface ISliderProps {
    reviews: IReview[];
}