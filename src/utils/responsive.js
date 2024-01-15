export const isMobileAgent = () => {
  const { userAgent } = window.navigator;
  const isMobile = /.*Android.*|.*iPad.*|.*iPhone.*/i.test(userAgent);

  return isMobile;
};

export const isPortraitOrientation = () => {
  const isPortraitOrientation = screen.orientation?.type?.match(/portrait/i);

  return isPortraitOrientation;
};
