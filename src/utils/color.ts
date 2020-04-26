import chroma from 'chroma-js';

export const findColorInvert = (color: string) => {
  if (chroma(color).luminance() > 0.55) {
    return 'rgba(0, 0, 0, 0.7)';
  }

  return '#fff';
};

export const findLightColor = (color: string) => {
  const chromaColor = chroma(color);
  const lightness = Math.max(chromaColor.get('hsl.l'), 0.96);
  const newColor = chromaColor.set('hsl.l', lightness).hex();
  return newColor;
};

export const findDarkColor = (color: string) => {
  const chromaColor = chroma(color);
  const base = 0.29;
  const luminance = chromaColor.luminance();
  const delta = 0.53 - luminance;
  const target = base + delta * 0.53;
  const newColor = chromaColor.set('hsl.l', Math.max(base, target)).hex();
  return newColor;
};
