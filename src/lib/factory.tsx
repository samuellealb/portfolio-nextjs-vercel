import { v4 as uuidv4 } from 'uuid';

/**
 * Generates an array of random images with specified length.
 *
 * @param length - The number of images to generate.
 * @returns An array of objects representing random images.
 */
export const imageFactory = (length: number) => {
  const images = [];
  for (let i = 0; i < length; i++) {
    const width = Math.floor(Math.random() * 1000) + 300;
    const height = Math.floor(Math.random() * 1000) + 300;
    images.push({
      sys: {
        id: uuidv4(),
      },
      url: `https://placehold.co/${width}x${height}`,
      title: `Random Movie ${i}`,
      width: width,
      height: height,
    });
  }
  return images;
};
