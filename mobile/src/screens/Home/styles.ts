import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  favoriteView: {
    marginTop: 30,
  },
  favoriteText: {
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT,
  },
  contentList: {
    marginTop: 80,
    paddingLeft: 32,
    paddingRight: 64,
  },
});
