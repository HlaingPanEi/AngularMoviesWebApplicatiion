import { Results } from "./results";

export interface Response{
    date?: Date;
    page?: number;
    results?: Results[];
    total_pages?: number;
    total_results?: number;
  }