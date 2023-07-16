import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteRepoStore = {
    favoriteRepoIds: number[];
    addToFavorites: (id: number) => void;
    removeFromFavorites: (id: number) => void;
}

const useFavoriteRepos = create(persist<FavoriteRepoStore>((set) => ({
    favoriteRepoIds: [],
    addToFavorites: (id: number) => {
      set((state) => ({
          favoriteRepoIds: [...state.favoriteRepoIds, id]
      }));
    },
    removeFromFavorites: (id: number) => {
     set((state) => ({
      favoriteRepoIds: state.favoriteRepoIds.filter(repo => repo !== id)
     })) 
    },
  }), {name: "Favorite Repos"}));

export default useFavoriteRepos