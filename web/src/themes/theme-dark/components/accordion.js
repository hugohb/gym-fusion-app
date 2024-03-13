// Material Dashboard 2 React Base Styles
import colors from "themes/theme-dark/base/colors";
import borders from "themes/theme-dark/base/borders";

const { background } = colors;
const { borderRadius } = borders;

const accordion = {
  styleOverrides: {
    root: {
      backgroundColor: background.default,
      "&:first-of-type": {
        borderTopLeftRadius: borderRadius.xl,
        borderTopRightRadius: borderRadius.xl,
      },
      "&:last-of-type": {
        borderBottomLeftRadius: borderRadius.xl,
        borderBottomRightRadius: borderRadius.xl,
      },
    },
  },
};

export default accordion;
