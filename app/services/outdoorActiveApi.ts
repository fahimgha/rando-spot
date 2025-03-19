const API_KEY = "yourtest-outdoora-ctiveapi";
const BASE_URL_V2 = "https://www.outdooractive.com/api/v2/project/api-dev-oa";
const BASE_URL_V1 = "https://www.outdooractive.com/api/project/api-dev-oa";
const LANG = "fr";

export const outdoorActiveApi = {
  async getHikesInEurope() {
    const url = `${BASE_URL_V2}/filter/tour?key=${API_KEY}&lang=${LANG}`;

    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Erreur API: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      if (!data?.answer?.contents) {
        throw new Error("Pas de contenu trouvé");
      }

      return data.answer.contents.map((item: any) => item.id);
    } catch (error) {
      console.error("Erreur lors de la récupération des randonnées:", error);
      throw error;
    }
  },

  async getHikesByCountryId(areaId: number): Promise<number[]> {
    const url = `${BASE_URL_V2}/filter/tour?area=${areaId}&key=${API_KEY}&lang=${LANG}`;

    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Erreur API: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      if (!data?.answer?.contents) {
        throw new Error("Pas de contenu trouvé");
      }

      return data.answer.contents.map((item: any) => item.id);
    } catch (error) {
      console.error("Erreur lors de la récupération des randonnées:", error);
      throw error;
    }
  },
  async getHikeById(tourId: string): Promise<string[]> {
    const url = `${BASE_URL_V1}/oois/${tourId}?key=${API_KEY}&lang=${LANG}`;

    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
      throw error;
    }
  },
};
