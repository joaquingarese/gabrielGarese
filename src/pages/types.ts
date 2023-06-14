export interface Block {
  _key: string;
  _type: string;
  style: string;
  list: string;
  children: any[];
}

interface ImageWithAlt {
  _key: string;
  _type: string;
  alt: string;
  asset: {
    _ref: string;
    _type: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
}

interface Reference {
  _ref: string;
  _type: string;
  name: string;
}

interface Image {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
    url: string;
  };
}

interface Video {
  url: string;
}

export interface Farm2 {
  _id: string;
  name: string;
  slug: {
    _type: string;
    current: string;
  };
  country: Reference;
  state: Reference;
  price: number;
  size: number;
  transaction: string;
  description: string;
  detail: Block[];
  specialities: [];
  gallery: ImageWithAlt[];
  image: Image;
}

export type FarmsData = Farm2[];

export interface House2 {
  _id: string;
  name: string;
  slug: {
    _type: string;
    current: string;
  };
  state: Reference;
  rooms: number;
  bathrooms: number;
  price: number;
  size: number;
  transaction: string;
  description: string;
  detail: Block[];
  gallery: ImageWithAlt[];
  image: Image;
}

export interface CattleType {
  _id: string;
  name: string;
  race: string;
  slug: {
    _type: string;
    current: string;
  };
  state: Reference;
  size: number;
  transaction: string;
  detail: Block[];
  shortDescription: string;
  category: string;
  gallery: ImageWithAlt[];
  image: Image;
  video: Video;
  _updatedAt: String;
}
