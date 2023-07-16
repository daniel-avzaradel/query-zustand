import { create } from "zustand";

type FavoriteRepoStore = {
    favoriteRepoIds: number[];
    addToFavorites: (id: number) => void;
    removeFromFavorites: (id: number) => void;
}

const useFavoriteRepos = create<FavoriteRepoStore>((set) => ({
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
}));

export default useFavoriteRepos