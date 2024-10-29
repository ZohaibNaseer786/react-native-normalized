import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window')?.width;
const WINDOW_HEIGHT = Dimensions.get('window')?.height;

type WidthPercentageToDP = (
  widthPercent: string | number,
  max?: number,
  min?: number
) => number;
type HeightPercentageToDP = (
  heightPercent: string | number,
  max?: number,
  min?: number
) => number;

const wp: WidthPercentageToDP = (widthPercent, max, min) => {
  // Parse string percentage input and convert ‰it to number.
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  let finalValue = PixelRatio.roundToNearestPixel(
    (WINDOW_WIDTH * elemWidth) / 100
  );
  if (min) finalValue = finalValue >= min ? min : finalValue;
  if (max) finalValue = finalValue <= max ? finalValue : max;
  return finalValue;
};

const hp: HeightPercentageToDP = (heightPercent, max, min) => {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  let finalValue = PixelRatio.roundToNearestPixel(
    (WINDOW_HEIGHT * elemHeight) / 100
  );
  if (max) finalValue = finalValue >= max ? max : finalValue;
  if (min) finalValue = finalValue <= min ? min : finalValue;

  return finalValue;
};

export { hp, wp };
