/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React Base Styles
import colors from "themes/theme/base/colors";
import typography from "themes/theme/base/typography";

const { transparent } = colors;
const { body1 } = typography;

const textField = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      fontSize: "10rem",
    },
  },
  defaultProps: {
    InputProps: { style: { ...body1 } },
  },
};

export default textField;
