import React, { FC, useContext } from 'react';
import { Image as RNImage, ImageProps as RNImageProps } from 'react-native';

import { ThemeContext } from '../../theme';
import createStyles from './styles';

interface OwnProps {
  aspectRatio?: AspectRatio;
  rounded?: boolean;
}

export type ImageProps = OwnProps & RNImageProps;

const Image: FC<ImageProps> = (props: ImageProps) => {
  const { aspectRatio, rounded = false, style = {}, ...rest } = props;
  const theme = useContext(ThemeContext);
  const styles = createStyles({ aspectRatio, rounded }, theme);

  return <RNImage {...rest} style={[styles.image, style]} />;
};

export default Image;
