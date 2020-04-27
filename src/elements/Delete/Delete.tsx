import React, { FC, useContext } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import chroma from 'chroma-js';

import { ThemeContext, IconContext } from '../../theme';
import createStyles from './styles';

interface OwnProps {
  size?: IconSize;
}

type Props = OwnProps & TouchableOpacityProps;

const Delete: FC<Props> = (props: Props) => {
  const { size = 'normal', style, ...rest } = props;
  const IconPack = useContext(IconContext) as Nullable<React.ElementType>;
  const theme = useContext(ThemeContext);

  const styles = createStyles({ size }, theme);
  const iconColor = chroma(theme.schemeInvert).alpha(0.2).hex();

  if (IconPack) {
    return (
      <TouchableOpacity {...rest} style={[styles.button, style]}>
        <IconPack
          color={iconColor}
          name="times-circle"
          solid
          style={[styles.icon]}
        />
      </TouchableOpacity>
    );
  }

  throw new Error(
    'No icon pack specified. Use IconProvider at the root of your app to configure an icon pack.',
  );
};

export default Delete;
