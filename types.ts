export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  technologies?: string[];
  year?: string;
}

export interface StrategyResponse {
  tagline: string;
  summary: string;
  suggestedStack: string[];
  marketingAngles: string[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}