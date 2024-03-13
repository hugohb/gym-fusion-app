// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function ProfileInfoCard({ title, shadow, children, onClose }) {
  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          {title}
        </MDTypography>
        <MDButton variant="text" onClick={onClose} iconOnly>
          <Icon color="secondary">close</Icon>
        </MDButton>
      </MDBox>
      <Divider sx={{ "margin-bottom": "0" }} />
      <MDBox p={2}>{children}</MDBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  shadow: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProfileInfoCard;
