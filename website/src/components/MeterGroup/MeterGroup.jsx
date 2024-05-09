import PropTypes from "prop-types";
import React from "react";
import styles from "./MeterGroup.module.css";
import { Box, Divider } from "react-ui-essentials";

const MeterGroup = ({ title, values, max, height, margin, padding, divider, ...rest }) => {
  const totalValue = values.reduce((sum, { value }) => sum + value, 0);
  const remainingSpace = max - totalValue;

  return (
    <Box outlined margin={margin} padding={padding} className={styles.rue_meter_group_container} {...rest}>
      <p className={styles.rue_meter_group_title}>{title}</p>
      {divider && <Divider margin="3px 0px" />}
      <div className={styles.rue_meter_group_bar}>
        {values.map(({ color, value }) => (
          <div
            key={color}
            style={{
              width: `${(value / totalValue) * 100}%`,
              height: height,
              backgroundColor: color,
            }}
          />
        ))}
        {totalValue < max && (
          <div
            className={styles.rue_meter_group_barSegment}
            style={{
              width: `${remainingSpace}%`,
              backgroundColor: "#ccc",
            }}
          />
        )}
      </div>
      <div className={styles.rue_row}>
        {values.map(({ label, value, color }) => (
          <div key={label} className={styles.rue_itemContainer}>
            <div className={styles.rue_colorDot} style={{ backgroundColor: color }} />
            <div>{label}</div>
            <div>({((value / totalValue) * 100).toFixed(2)}%)</div>
          </div>
        ))}
        {remainingSpace > 0 && (
          <div className={styles.rue_itemContainer}>
            <div className={styles.rue_colorDot} style={{ backgroundColor: "#ccc" }} />
            <div>Remaining Space</div>
            <div>({remainingSpace.toFixed(2)}%)</div>
          </div>
        )}
      </div>
    </Box>
  );
};

MeterGroup.propTypes = {
  height: PropTypes.string,
  max: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  values: PropTypes.shape({
    map: PropTypes.func,
    reduce: PropTypes.func,
  }),
  margin: PropTypes.string,
  padding: PropTypes.string,
  divider: PropTypes.bool,
};

MeterGroup.defaultProps = {
  margin: "10px",
  padding: "10px",
  divider: true,
};
export default MeterGroup;
