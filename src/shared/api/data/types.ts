export type LastRatesResponse = {
  base: string;
  date: string;
  rates: {
    EUR: number;
    GBP: number;
  };
  success: boolean;
  timestamp: number;
};

export type LastRatesPayload = {
  from: string;
  to: string;
};
