import { groq } from 'next-sanity';

export default groq`{
    "farms": *[_type == "farms"] {
        ...,
            imagen {
            "width": asset->metadata.dimensions.width,
            "height": asset->metadata.dimensions.height,
            asset->
            },
            country->,
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
