import { Box } from "@mui/material";
// Profile image
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }} // objectFit: "cover": It does crop the side if it needs to fit the dimensions and borderRadius: "50%" each user image which is just going to be that Circle 
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:8080/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;