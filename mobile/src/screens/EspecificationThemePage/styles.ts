import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.CAPTION_400,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 10,
  },
  characteristics: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.CAPTION_400,
    textAlign: 'justify',
  },
  wrapperTextAndImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  whereLived: {
    width: '60%',
    height: 200,
  },
  whereLivedText: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.CAPTION_400,
    textAlign: 'justify',
  },
  whereLivedImage: {
    width: '35%',
    height: 200,
    borderRadius: 8,
  },
  type: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.CAPTION_300,
    marginTop: 5,
    textAlign: 'justify',
  },
  decriptionType: {
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.CAPTION_400,
    marginTop: 5,
  },
});
