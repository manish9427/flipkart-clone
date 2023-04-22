import { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Best of Electronics" timer={false} />
        <Slide
          products={products}
          title="Beauty, Food, Toys & more"
          timer={false}
        />
        <Slide
          products={products}
          title="Shop for a Cool Summer"
          timer={false}
        />
        <Slide
          products={products}
          title="Sports, Healthcare & more"
          timer={false}
        />
      </Component>
    </>
  );
};
export default Home;
