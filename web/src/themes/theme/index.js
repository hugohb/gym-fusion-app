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

// @mui material components
import { createTheme } from "@mui/material/styles";

// Material Dashboard 2 React base styles
import colors from "themes/theme/base/colors";
import breakpoints from "themes/theme/base/breakpoints";
import typography from "themes/theme/base/typography";
import boxShadows from "themes/theme/base/boxShadows";
import borders from "themes/theme/base/borders";
import globals from "themes/theme/base/globals";

// Material Dashboard 2 React helper functions
import boxShadow from "themes/theme/functions/boxShadow";
import hexToRgb from "themes/theme/functions/hexToRgb";
import linearGradient from "themes/theme/functions/linearGradient";
import pxToRem from "themes/theme/functions/pxToRem";
import rgba from "themes/theme/functions/rgba";

// Material Dashboard 2 React components base styles for @mui material components
import sidenav from "themes/theme/components/sidenav";
import list from "themes/theme/components/list";
import listItem from "themes/theme/components/list/listItem";
import listItemText from "themes/theme/components/list/listItemText";
import card from "themes/theme/components/card";
import cardMedia from "themes/theme/components/card/cardMedia";
import cardContent from "themes/theme/components/card/cardContent";
import button from "themes/theme/components/button";
import iconButton from "themes/theme/components/iconButton";
import input from "themes/theme/components/form/input";
import inputLabel from "themes/theme/components/form/inputLabel";
import inputOutlined from "themes/theme/components/form/inputOutlined";
import textField from "themes/theme/components/form/textField";
import menu from "themes/theme/components/menu";
import menuItem from "themes/theme/components/menu/menuItem";
import switchButton from "themes/theme/components/form/switchButton";
import divider from "themes/theme/components/divider";
import tableContainer from "themes/theme/components/table/tableContainer";
import tableHead from "themes/theme/components/table/tableHead";
import tableCell from "themes/theme/components/table/tableCell";
import linearProgress from "themes/theme/components/linearProgress";
import breadcrumbs from "themes/theme/components/breadcrumbs";
import slider from "themes/theme/components/slider";
import avatar from "themes/theme/components/avatar";
import tooltip from "themes/theme/components/tooltip";
import appBar from "themes/theme/components/appBar";
import tabs from "themes/theme/components/tabs";
import tab from "themes/theme/components/tabs/tab";
import stepper from "themes/theme/components/stepper";
import step from "themes/theme/components/stepper/step";
import stepConnector from "themes/theme/components/stepper/stepConnector";
import stepLabel from "themes/theme/components/stepper/stepLabel";
import stepIcon from "themes/theme/components/stepper/stepIcon";
import select from "themes/theme/components/form/select";
import formControlLabel from "themes/theme/components/form/formControlLabel";
import formLabel from "themes/theme/components/form/formLabel";
import checkbox from "themes/theme/components/form/checkbox";
import radio from "themes/theme/components/form/radio";
import autocomplete from "themes/theme/components/form/autocomplete";
import container from "themes/theme/components/container";
import popover from "themes/theme/components/popover";
import buttonBase from "themes/theme/components/buttonBase";
import icon from "themes/theme/components/icon";
import svgIcon from "themes/theme/components/svgIcon";
import link from "themes/theme/components/link";
import dialog from "themes/theme/components/dialog";
import dialogTitle from "themes/theme/components/dialog/dialogTitle";
import dialogContent from "themes/theme/components/dialog/dialogContent";
import dialogContentText from "themes/theme/components/dialog/dialogContentText";
import dialogActions from "themes/theme/components/dialog/dialogActions";
import accordion from "themes/theme/components/accordion";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
    MuiAccordion: { ...accordion },
  },
});
