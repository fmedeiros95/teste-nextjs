import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AppState = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  isCompactMenu: boolean;
  setIsCompactMenu: (isCompact: boolean) => void;
  isDarkTheme: boolean;
  setIsDarkTheme: (isDark: boolean) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    set => ({
      isMobileMenuOpen: false,
      setIsMobileMenuOpen: isOpen => set({ isMobileMenuOpen: isOpen }),
      isCompactMenu: false,
      setIsCompactMenu: isCompact => set({ isCompactMenu: isCompact }),
      isDarkTheme: false,
      setIsDarkTheme: isDark => set({ isDarkTheme: isDark }),
    }),
    {
      name: 'app-settings',
    }
  )
);
