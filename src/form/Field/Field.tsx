import React, { FC, ReactNode } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../theme';
import createStyles from './Field.styles';

interface OwnProps {
  /** An `Input` element and any add-ons */
  children: ReactNode;

  /** Bulma Color variable */
  color?: Color;

  /** Help text to display below the `Input` */
  help?: string;

  /** @default false */
  horizontal?: boolean;

  /** Label text to display above the `Input` */
  label?: string;

  /** Bulma Size variable
   * @default normal
   */
  size?: Size;
}

export type FieldProps = OwnProps;

/**
 * Stand-in for the [Bulma Field element](https://bulma.io/documentation/form/general/).
 * Wraps any number of form elements to provides styling and spacing
 */
const Field: FC<FieldProps> = (props: FieldProps) => {
  const { color, horizontal = false, size = 'normal' } = props;

  const theme = useTheme();
  const styles = createStyles({ color, size }, theme);

  const numChildren = React.Children.count(props.children);

  const renderChild = (child: React.ReactNode, index: number) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: [
          index > 0 && styles.childNotFirst,
          index !== numChildren - 1 && styles.childNotLast,
          child.props.style,
        ],
        containerStyle: styles.childStretched,
      });
    }

    return child;
  };

  return (
    <View style={[styles.field, horizontal && styles.fieldHorizontal]}>
      {props.label && (
        <Text style={[styles.label, horizontal && styles.labelHorizontal]}>
          {props.label}
        </Text>
      )}
      <View style={[horizontal && styles.inputContainerHorizontal]}>
        <View style={styles.children}>
          {React.Children.map(props.children, renderChild)}
        </View>
        {props.help && <Text style={styles.help}>{props.help}</Text>}
      </View>
    </View>
  );
};

export default Field;
