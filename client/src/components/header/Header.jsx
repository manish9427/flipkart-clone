import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";

//components
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-style: italic;
  font-size: 10px;
`;

const PlusImage = styled("img")({
  height: 10,
  width: 10,
  marginLeft: 4,
});

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component>
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore &nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
              <PlusImage src={subURL} alt="sub-logo" />
            </SubHeading>
          </Box>
        </Component>
        <Search />
        <Box>
          <CustomButtons />
        </Box>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
