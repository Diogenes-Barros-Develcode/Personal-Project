export interface ThemeParams {
  id: string;
  name: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      ThemePage: ThemeParams;
    }
  }
}
