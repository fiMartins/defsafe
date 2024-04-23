import { useCatFactsStore } from "~/stores/catFacts";

export default defineEventHandler(async (event) => {
  const catFactsStore = useCatFactsStore();

  try {
    if (catFactsStore.facts.length === 0) {
      const response = await fetch(
        "https://meowfacts.herokuapp.com/?count=200"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cat facts");
      }
      const data = await response.json();

      const facts = data.data;

      // Armazene os fatos de gato na store Pinia
      catFactsStore.setFacts(facts);
    }
  } catch (error) {
    console.error("Error fetching cat facts:", error);
    catFactsStore.setError("Failed to fetch cat facts.");
  }
});
