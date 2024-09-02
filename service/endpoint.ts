import APIClient from "./apiClient";

export const getCharacters = () => APIClient.get("/character");
