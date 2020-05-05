import React, { FC, useContext } from 'react';
import { Image as RNImage, ImageProps as RNImageProps } from 'react-native';

import { ThemeContext } from '../../theme';
import createStyles from './Image.styles';

interface OwnProps {
  /** Only available on Native apps - will not work on React Native Web */
  aspectRatio?: AspectRatio;

  /** @default false */
  rounded?: boolean;
}

export type ImageProps = OwnProps & RNImageProps;

/**
 * `Image` with styles based on the [Bulma Image element](https://bulma.io/documentation/elements/image/)
 *
 * Note: Aspect ratio will not work on the Web. It uses the React Native [Aspect Ratio](https://reactnative.dev/docs/layout-props#aspectratio)
 * layout prop, which is a property not available in CSS
 */
const Image: FC<ImageProps> = (props: ImageProps) => {
  const { aspectRatio, rounded = false, style = {}, ...rest } = props;
  const theme = useContext(ThemeContext);
  const styles = createStyles({ aspectRatio, rounded }, theme);

  return <RNImage {...rest} style={[styles.image, style]} />;
};

export default Image;
