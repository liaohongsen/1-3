
export enum BrochurePage {
  OVERVIEW = 'OVERVIEW',
  DETAILS = 'DETAILS'
}

export interface PricingItem {
  package: string;
  total: string;
  unit: string;
}
