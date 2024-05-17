export const visible = ({ screenClass, xs, sm, md, lg, xl, xxl, xxxl }) => {
  const screenSizes = { xs, sm, md, lg, xl, xxl, xxxl };
  return screenSizes[screenClass] || xs;
};

export default visible;
