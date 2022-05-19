import 'styled-components';
import { COLORS, Themes } from './constants';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: typeof COLORS;
    themes?: Themes;
  }
}
