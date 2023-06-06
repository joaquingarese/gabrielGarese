import { groq } from 'next-sanity';

export const cattleById = (id: string) => groq`
*[_type == "cattle" && _id == "${id}"] {
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
    },s
}`;
