import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppStore {
  isMuted: boolean;
  toggleMute: () => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      isMuted: false,
      toggleMute: () => set({ isMuted: !get().isMuted }),
    }),
    { name: 'baby-learn-muted' },
  ),
);
