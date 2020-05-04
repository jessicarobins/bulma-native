import React, { FC, useContext } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { ThemeContext, IconContext } from '../../theme';
import createStyles from './Icon.styles';

export type IconProps = {
  /** Corresponds to Bulma Colors */
  color?: Color;

  /** Name of the icon to use (Specific to the chosen Icon Pack) */
  name: string;

  /** Corresponds to Bulma Sizes
   * @default normal
   */
  size?: IconSize;

  /** Used only in the [FontAwesome5 pack](https://github.com/oblador/react-native-vector-icons#multi-style-fonts) */
  solid?: boolean;

  /** Icon styles */
  style?: StyleProp<TextStyle>;
};

/**
 * Provides styles from the [Bulma Icon element](https://bulma.io/documentation/elements/icon/)
 * to the [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) library.
 * Requires an `iconPack` from that library to be supplied to the root `ApplicationProvider` component
 */
const Icon: FC<IconProps> = (props: IconProps) => {
  const IconPack = useContext(IconContext) as Nullable<React.ElementType>;
  const theme = useContext(ThemeContext);
  const styles = createStyles(
    { color: props.color, size: props.size || 'normal' },
    theme,
  );

  if (IconPack) {
    return (
      <IconPack
        name={props.name}
        solid={props.solid}
        style={[styles.icon, props.style]}
      />
    );
  }

  throw new Error(
    'No icon pack specified. Use IconProvider at the root of your app to configure an icon pack.',
  );
};

export default Icon;
