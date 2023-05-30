import { groq } from 'next-sanity';

export const farmById = (id: string) => groq`
*[_type == "farms" && _id == "${id}"] {
    ...,
    image {
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height,
        asset->
    },
    country->,
    state->,
    gallery[] {
        ...,
        image {
            "width": asset->metadata.dimensions.width,
            "height": asset->metadata.dimensions.height,
            asset->
        }
    }
}`;
