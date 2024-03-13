// Material Dashboard 2 React Base Styles
import borders from "themes/theme/base/borders";

const { borderRadius } = borders;

const accordion = {
  styleOverrides: {
    root: {
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
