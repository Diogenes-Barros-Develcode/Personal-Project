import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    marginLeft: 30,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: THEME.COLORS.CAPTION_300,
  },
  title: {
    marginLeft: 80,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    color: THEME.COLORS.CAPTION_300,
  },
});
