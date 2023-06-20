import { groq } from 'next-sanity';

export default groq`{
    "information": *[_type == "information"] {
        ...,         
    }
}`;
