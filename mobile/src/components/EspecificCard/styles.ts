import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginRight: 24,
  },
  cover: {
    width: 160,
    height: 250,
    justifyContent: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden',
  },
  footer: {
    width: '100%',
    height: 102,
    padding: 16,
  },
  name: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    alignSelf: 'center',
  },
  ads: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
