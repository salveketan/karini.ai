import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const handleRemoveCart = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      <Box p={5}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {cartData.items.length !== 0 ? (
              <>
                {" "}
                {cartData.items?.map((e, index) => (
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
                        <Button onClick={() => handleRemoveCart(e)}>
                          REMOVE FROM CART
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
              </>
            ) : (
              <>
                {" "}
                <Typography variant="h6">
                  No item added in the cart
                </Typography>
              </>
            )}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Cart;
