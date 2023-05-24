export interface Farm2 {
  name: string;
  state: string;
  country: string;
  type: string;
  id: string;
}

export interface FarmsData {
  farms: Farm2[];
}

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
