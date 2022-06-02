import 'styled-components';
import { COLORS, Theme } from './constants';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof COLORS;
    mode: Theme;
  }
}
