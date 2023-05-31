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
  state: string;
  town: string;
  type: string;
  id: string;
}

export interface CattlesType {
  race: string;
  quantity: number;
  information: string;
  id: string;
}
