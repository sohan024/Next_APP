export class GetProductsResponse {
    products?: ProductModel[];
}

export class ProductModel {
    FullDescription?: string;
    Id?: string;
    MarkAsNew?: boolean;
    Name?: string;
    PictureModels?: PictureModel[];
    ProductPrice?: ProductPriceModel;
    ProductSpecificationModel?: any;
    ProductType?: number;
    ReviewOverviewModel?: any;
    SeName?: string;
    ShortDescription?: string;
    Sku?: any;
}

export class ProductPriceModel{
    AvailableForPreOrder?: boolean;
    BasePricePAngV?: any;
    BasePricePAngVValue?: number;
    DisableAddToCompareListButton?: boolean;
    DisableBuyButton?: boolean;
    DisableWishlistButton?: boolean;
    DisplayTaxShippingInfo?: boolean;
    ForceRedirectionAfterAddingToCart?: boolean;
    IsRental?: boolean;
    OldPrice?: any;
    OldPriceValue?: any;
    PreOrderAvailabilityStartDateTimeUtc?: any;
    Price?: string;
    PriceValue?: number;
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
    ImageUrl?: any
    ThumbImageUrl?: any
    FullSizeImageUrl?: any
    Title?: any
    AlternateText?: any
}



