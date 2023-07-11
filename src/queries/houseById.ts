import { groq } from 'next-sanity';

export const houseById = (id: string) => groq`
*[_type == "houses" && _id == "${id}"] {
    ...,
    image {
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height,
        asset->
    },
    state,
    gallery[] {
        ...,
        image {
            "width": asset->metadata.dimensions.width,
            "height": asset->metadata.dimensions.height,
            asset->
        }
    }
}`;
