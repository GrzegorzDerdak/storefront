import { SearchIntegration } from "../../types";

export const publicSearchService: SearchIntegration = {
  getAllProducts: async () => {
    return [{ title: "Public product", price: 1 }];
  },
};
