import { groq } from 'next-sanity';

export default groq`{
    "houses": *[_type == "houses"] {
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
    },
    }
}`;
