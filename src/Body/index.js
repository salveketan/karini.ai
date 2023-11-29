import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import Data from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartReducer";

export default function BodyCard() {
  const dispatch = useDispatch();
  const [allData, setAlldata] = React.useState([...Data.data]);
  const [newData, setNewData] = React.useState([]);
  const cartData = useSelector((state) => state.cart.search);

  React.useEffect(() => {
    console.log(cartData);
    if (cartData) {
      const foundObjects = allData.filter(
        (item) => item.Title === `${cartData.title}`
      );
      setNewData(foundObjects);
    } else {
      setNewData(allData);
    }
  }, [cartData]);

  const handleAddToCart = (e) => {
    dispatch(addItem(e));
  };
  
  return (
    <Box p={5}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {newData.map((e, index) => (
            <>
              {e.Title !== "" ? (
                <>
                  <Grid item xs={2} sm={4} md={4} key={e.id}>
                    <Paper
                      sx={{
                        width: 250,
                        height: 300,
                        //
                        p: 1,
                      }}
                      elevation={3}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "50%",
                        }}
                      >
                        {e.Image_Src ? (
                          <img
                            //   srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            src={e.Image_Src}
                            alt={e.Title}
                            width={"70%"}
                            loading="lazy"
                          />
                        ) : (
                          <></>
                        )}
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: "15%",

                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: "2",
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        <Typography variant="subtitle2">{e.Title}</Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: "25%",
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {e.Body}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: "10%",
                        }}
                      >
                        <Button onClick={() => handleAddToCart(e)}>
                          ADD TO CART
                        </Button>
                      </Box>
                    </Paper>
                  </Grid>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
