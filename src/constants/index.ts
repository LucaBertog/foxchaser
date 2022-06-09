export const COLORS = {
  button1: 'linear-gradient(135deg, #2C3243 0%, #424754 100%)',
  button2: 'linear-gradient(92.34deg, #FF7A00 0.44%, #FFA800 97.46%)',
  button3: 'linear-gradient(91.55deg, #1D212E 0.33%, #31343E 102.14%)',
  button4: 'linear-gradient(92.61deg, #FAFAFA 1.69%, #E9E9E9 100%)',
  color1: 'linear-gradient(91.51deg, #2C3243 1.83%, #424754 103.27%)',
  blue0: '#DCE3F4',
  blue1: '#434E6A',
  blue2: '#2C3243',
  blue3: '#1D222E',
  blue4: '#060911',
  blueDivision: '#3A4359',
  bluen1: '#606B88',
  orange: '#FF7A00',
  white: '#FFFFFF',
};

export interface Theme {
  id: string;
  name: string;
  colors: {
    body: string;
    text: string;
    container: string;
    iconDark: string;
    bgIconDark: string;
    iconLight: string;
    bgIconLight: string;
    button1: string;
    bgIconGame: string;
    bgGamesWrapper: string;
    bgIconsGames: string;
    bgIconExit: string;
    imageGradient: string;
  };
}

export const THEMES: { [key: string]: Theme } = {
  dark: {
    id: 'T_001',
    name: 'Dark',
    colors: {
      body: COLORS.blue4,
      text: COLORS.white,
      container: COLORS.blue3,
      iconDark: COLORS.blue2,
      bgIconDark: COLORS.blue1,
      iconLight: COLORS.white,
      bgIconLight: COLORS.blue2,
      button1: COLORS.button1,
      bgIconGame: COLORS.blue0,
      bgGamesWrapper: COLORS.blue2,
      bgIconsGames: COLORS.blue1,
      bgIconExit: 'rgba(71, 99, 172, 0.66)',
      imageGradient:
        'linear-gradient(360deg, #060911 0%, rgba(6, 9, 17, 0) 67%)',
    },
  },
};
