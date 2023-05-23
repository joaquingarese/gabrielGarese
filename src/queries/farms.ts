import { groq } from 'next-sanity';

export default groq`{
    "farms": *[_type == "farms"] {
        ...,
        mainImage {
            ...,
            image {
            "width": asset->metadata.dimensions.width,
            "height": asset->metadata.dimensions.height,
            asset->
            }
        }
    }
}`;
