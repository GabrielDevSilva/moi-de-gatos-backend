export interface Cats {
  id: string;
  name: string;
  age: number;
  breed: string;
}

export interface IParams {
  take: number;
  skip: number;
  order;
}
export interface IParamsName extends IParams {
  name: string;
}

export interface IParamsBreed {
  breed: string;
  order;
}
