// export const hidden = ({
//   screenClass, xs, sm, md, lg, xl, xxl, xxxl,
// }) => {
//   if (screenClass === 'xxl') return xxl;
//   if (screenClass === 'xxxl') return xxxl;
//   if (screenClass === 'xl') return xl;
//   if (screenClass === 'lg') return lg;
//   if (screenClass === 'md') return md;
//   if (screenClass === 'sm') return sm;
//   return xs;
// };

// export default hidden;
export const hidden = ({
  screenClass, xs, sm, md, lg, xl, xxl, xxxl,
}) => {
  const screenSizes = { xs, sm, md, lg, xl, xxl, xxxl };
  return screenSizes[screenClass] || xs;
};

export default hidden;

