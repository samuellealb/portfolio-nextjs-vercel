export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 1200,
  xl: 1920,
};

export const getScreenSize = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= breakpoints.xl) return 'ultrawide';
  if (screenWidth >= breakpoints.lg) return 'desktop';
  if (screenWidth >= breakpoints.sm) return 'tablet';
  return 'mobile';
};
