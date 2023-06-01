import { groq } from 'next-sanity';

export const farmByLocation = (location: string) => groq`
  *[_type == "farms" && country->name == $location]{
    ...,
    image {
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height,
        asset->
    },
    state->,
    gallery[] {
        ...,
        image {
            "width": asset->metadata.dimensions.width,
            "height": asset->metadata.dimensions.height,
            asset->
        }
    }
  }
  `;
