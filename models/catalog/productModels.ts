export class GetProductsResponse {

}

export class GetProductByIdModel {
    Id?: any;
    Name?: string;
    Price?: any;
    ShortDescription?: string;
    FullDescription?: any;
    DefaultPictureModel?: PictureModel;
    PictureModels?: PictureModel[];
}

export class PictureModel {
    ImageUrl?:any
    ThumbImageUrl?:any
    FullSizeImageUrl?:any
    Title?:any
    AlternateText?:any
}