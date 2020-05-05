import React, { FC, useContext } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  StyleProp,
} from 'react-native';

import { ThemeContext } from '../../theme';
import createStyles from './Delete.styles';
import Icon from '../Icon';

interface OwnProps {
  /**
   * Name of the Delete icon to use.
   * @default times
   */
  iconName?: string;

  /** Styles to pass to the Delete Icon */
  iconStyle?: StyleProp<TextStyle>;

  /**
   * Corresponds to Bulma Sizes
   * @default normal
   */
  size?: IconSize;
}

type Props = OwnProps & TouchableOpacityProps;

/**
 * Icon Button that serves as a stand-in for the [Bulma Delete element](https://bulma.io/documentation/elements/delete/)
 * Requires `iconPack` to be supplied to the root `ApplicationProvider` component
 * */
const Delete: FC<Props> = (props: Props) => {
  const {
    iconName = 'times',
    iconStyle = {},
    size = 'normal',
    style,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);

  const styles = createStyles({ size }, theme);

  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      <Icon
        name={iconName}
        size={size}
        solid
        style={[styles.icon, iconStyle]}
      />
    </TouchableOpacity>
  );
};

export default Delete;
