import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../theme';
import createStyles from './Field.styles';

export interface OwnProps {
  children: React.ReactNode;
  color?: Color;
  help?: string;
  horizontal?: boolean;
  label?: string;
  size?: Size;
}

export type FieldProps = OwnProps;

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
