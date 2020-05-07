# Bulma Native

Bulma Native is a React Native port of the amazing CSS component library, [Bulma](https://bulma.io/).

## Getting started

This guide will help you start using Bulma Native components in your React Native app.

If you have not already set up a React Native project, please refer to
the [React Native documentation](https://reactnative.dev/docs/environment-setup) to
get started. Bulma Native will work with both Expo and vanilla React Native projects.

### Install

```bash
yarn add @jrobins/bulma-native
```

#### Installing Icons

If you would like to use components that include icons, and you are not using Expo, you will also need
to add [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) and follow its
installation instructions.

If you are using Expo, Icons are already built in via the [@expo/vector-icons](https://docs.expo.io/guides/icons/)
library.

For more information on icon installation and usage, see [the Bulma Native Storybook page for Icons](https://jessicarobins.github.io/bulma-native/?path=/docs/overview-icons--page)

## Documentation

Documentation for the Bulma Native component library lives in the [Bulma Native Storybook](https://jessicarobins.github.io/bulma-native/?path=/docs/overview-icons--page). There, you can preview components, view and interactively set their props, and copy sample code. This Storybook also contains information on [setting up theming](https://jessicarobins.github.io/bulma-native/?path=/docs/overview-theming--page).

### Caveat

The components in this Storybook were adapted to web using [React Native Web](https://github.com/necolas/react-native-web).
As such, components are not guaranteed to be 100% accurate reflection of what they would look like on a device.

#### Sub-caveat

The `Image` component relies on a prop specific to React Native. As such, it does not display on web. I am currently working on a solution for this, as well as a solution for previewing components using Expo Snacks.
