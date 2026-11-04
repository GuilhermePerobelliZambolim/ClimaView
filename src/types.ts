export type Cidade = {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

export type CardProps = {
  cidade: Cidade | null;
}