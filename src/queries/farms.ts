import { groq } from 'next-sanity';

export default groq`{
    "farms": *[_type == "farms"] {
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
    },
    }
}`;
