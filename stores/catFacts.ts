import { defineStore } from "pinia";

export const useCatFactsStore = defineStore("catFacts", () => {
  const facts = ref<string[]>([]);
  const randomfact = ref<string>();
  const error = ref();

  const setFacts = (payload: string[]) => (facts.value = payload);
  const setError = (err: string) => (error.value = err);

  const fetchFacts = async () => {
    if (facts.value.length === 0) {
      const response = await fetch(
        "https://meowfacts.herokuapp.com/?count=200"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cat facts");
      }
      const data = await response.json();

      const facts = data.data;

      // Armazene os fatos de gato na store Pinia
      setFacts(facts);
    }
  };

  const getRandomFact = (): string => {
    // if (facts.value.length === 0) {
    //   return undefined;
    // }
    const randomIndex = Math.floor(Math.random() * facts.value.length);
    return facts.value[randomIndex];
  };

  return { facts, fetchFacts, setFacts, setError, getRandomFact };
});
