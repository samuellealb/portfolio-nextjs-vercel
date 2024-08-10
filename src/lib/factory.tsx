/**
 * Generates an array of random images with specified length.
 *
 * @param length - The number of images to generate.
 * @returns An array of objects representing random images.
 */
export const imageFactory = (length: number) => {
  const images = [];
  for (let i = 0; i < length; i++) {
    images.push({
      url: `https://placehold.co/${Math.floor(Math.random() * 1000) + 300}x${Math.floor(Math.random() * 1000) + 300}`,
      title: `Random Movie ${i}`,
    });
  }
  return images;
};
