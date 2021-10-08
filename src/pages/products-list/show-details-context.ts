import { createContext, Dispatch, SetStateAction } from "react";

export const ShowDetailsContext = createContext<{
  showProductDetails: boolean;
  setShowProductDetails: Dispatch<SetStateAction<boolean>>;
}>({
  showProductDetails: false,
  setShowProductDetails: (showProductDetails) => showProductDetails,
});
