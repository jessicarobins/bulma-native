import React, { FC, useContext } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  StyleProp,
} from 'react-native';

import { ThemeContext } from '../../theme';
import createStyles from './styles';
import Icon from '../Icon';

interface OwnProps {
  iconStyle?: StyleProp<TextStyle>;
  size?: IconSize;
}

type Props = OwnProps & TouchableOpacityProps;

const Delete: FC<Props> = (props: Props) => {
  const { iconStyle = {}, size = 'normal', style, ...rest } = props;
  const theme = useContext(ThemeContext);

  const styles = createStyles({ size }, theme);

  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      <Icon name="times" size={size} solid style={[styles.icon, iconStyle]} />
    </TouchableOpacity>
  );
};

export default Delete;
