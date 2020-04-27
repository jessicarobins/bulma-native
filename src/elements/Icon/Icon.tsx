import React, { FC, useContext } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { ThemeContext, IconContext } from '../../theme';
import createStyles from './styles';

export type IconProps = {
  color?: Color;
  name: string;
  size?: IconSize;
  solid?: boolean;
  style?: StyleProp<TextStyle>;
};

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
