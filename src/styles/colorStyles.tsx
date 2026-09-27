import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. 색상 정의 (Palette)
export const colors = {
  primaryLight: '#D32F2F',
  primaryDark: '#E5BB31',
  white: '#FFFFFF',
  black: '#000000'
} as const;

// 2. 테마 구조 타입(Interface) 정의
export interface Theme {
  background: string;
  text: string;
  button: string;
}

// 3. 타입(Theme)을 적용하여 테마 객체 생성
export const lightTheme: Theme = {
  background: '#FAF7F2',
  text: colors.black,
  button: colors.primaryLight,
};

export const darkTheme: Theme = {
  background: '#18191B',
  text: colors.white,
  button: colors.primaryDark,
};

type ThemeMode = 'light' | 'dark';

type ThemeContextType = {
  mode: ThemeMode;
  theme: Theme;
  toggleTheme: () => void;
};

// 3. React Context 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 4. Provider 컴포넌트 (TSX)
export const ColorStyleProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5. 컴포넌트에서 쉽게 불러 쓸 커스텀 훅
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ColorStyleProvider');
  }
  return context;
};