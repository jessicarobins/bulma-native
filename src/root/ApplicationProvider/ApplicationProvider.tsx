import React, { FC } from 'react';
import { ThemeProvider, IconProvider, Theme } from '../../theme';

type Props = {
  children: React.ReactNode;
  iconPack?: React.ReactNode;
  theme: Theme;
};

const ApplicationProvider: FC<Props> = (props: Props) => {
  return (
    <IconProvider value={props.iconPack}>
      <ThemeProvider value={props.theme}>{props.children}</ThemeProvider>
    </IconProvider>
  );
};

export default ApplicationProvider;
