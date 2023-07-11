type informationType = {
  customDate: Date;
  novillos: number;
  cows: number;
  vaquillonas: number;
  corderoPesado: number;
  capones: number;
  ovejas: number;
  vacunos: number;
  ovinos: number;
};

type Block = {
  _key: string;
  _type: string;
  style: string;
  list: string;
  children: any[];
};

type ImageWithAlt = {
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
};

type Reference = {
  _ref: string;
  _type: string;
  name: string;
};

type Image = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
    url: string;
  };
};

type Video = {
  url: string;
};

type Farm2 = {
  _id: string;
  _type: string;
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
};

type FarmsData = Farm2[];

type House2 = {
  _id: string;
  _type: string;
  name: string;
  slug: {
    _type: string;
    current: string;
  };
  state: string;
  rooms: number;
  bathrooms: number;
  price: number;
  size: number;
  transaction: string;
  description: string;
  detail: Block[];
  gallery: ImageWithAlt[];
  image: Image;
};

type CattleType = {
  _id: string;
  _type: string;
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
  _updatedAt: string;
};
