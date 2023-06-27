import { groq } from 'next-sanity';

export const farmsByState = (stateId: string) => groq`
*[_type == "farms" && state._ref == "${stateId}"] {
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
