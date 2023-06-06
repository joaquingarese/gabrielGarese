import { groq } from 'next-sanity';

export default groq`{
    "cattle": *[_type == "cattle"] {
        ...,
            image {
                "width": asset->metadata.dimensions.width,
                "height": asset->metadata.dimensions.height,
                asset->
                },
            "video": {
            "url": video.url
            },
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
