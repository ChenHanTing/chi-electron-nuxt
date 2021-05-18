import { map } from 'ramda';

export const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1280,
};

export const breakpointBelow = map((value) => value - 1, breakpoints);

export const containerWidth = {
  extraSmall: 360,
  small: 540,
  medium: 768,
  large: 960,
  extraLarge: 1272,
};
