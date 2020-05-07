import React, { FC } from 'react';
import { ThemeProvider, IconProvider, Theme } from '../../theme';

export type ApplicationProviderProps = {
  children: React.ReactNode;
  iconPack?: React.ReactNode;
  theme: Theme;
};

const ApplicationProvider: FC<ApplicationProviderProps> = (
  props: ApplicationProviderProps,
) => {
  return (
    <IconProvider value={props.iconPack}>
      <ThemeProvider value={props.theme}>{props.children}</ThemeProvider>
    </IconProvider>
  );
};

export default ApplicationProvider;
