import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  name: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.CAPTION_300,
    marginLeft: 40,
  },
  cover: {
    width: 100,
    height: 100,
    justifyContent: 'flex-end',
    borderRadius: 20,
    overflow: 'hidden',
  },
});
