import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useApartment() {
  const location = useLocation();
  const [flat, setFlat] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/logements.json")
      .then((res) => {
       console.log("Réponse brute : ", res);
       return res.json();
       })
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        setFlat(flat);
    })
      .catch(console.error);
    return () => {
       controller.abort();
    };
  }, [location.state?.apartmentId]);
  return flat;
}