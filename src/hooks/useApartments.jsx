import { useState, useEffect } from "react";

export const useApartments = () => {
const [apartments, setApartments] = useState([]);

useEffect(() => {
  console.log("component was mounted, we fetch apartments");
  const abortController = new AbortController();
  fetch("/logements.json", {signal: abortController.signal })
  .then((res) => res.json())
  .then((res) => setApartments(res))
   .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        } else {
          console.log("fetch");
        }
      });

      return () => {
        console.log("Cleanup: aborting fetch");
        abortController.abort();
      };
}, []);
return apartments;
};