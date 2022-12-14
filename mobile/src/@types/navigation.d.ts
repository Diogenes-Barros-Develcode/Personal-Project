export interface ThemeParams {
  id: string;
  name: string;
}

export interface EspecificationParams {
  id: string;
  name: string;
  characteristics: string;
  speciesType: string;
  themeImage: string;
  whereLived: string;
  whereLivedImage: string;
  imageToColor: string;
  favoriteThemeId: string;
}

export interface ImageParams {
  id: string;
  imageToColor: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      ThemePage: ThemeParams;
      EspecificationThemePage: EspecificationParams;
      Activities: ImageParams;
    }
  }
}
