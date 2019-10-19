export interface ISeason {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}
