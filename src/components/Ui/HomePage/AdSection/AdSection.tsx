"use client";
import bg_image from "@/asset/breeder_bg.jpg";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/autoplay";

const AdSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "80vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
          textAlign: "center",
          "& img": {
            width: "100%",
            height: "100%",
          },
        }}
      >
        <Image src={bg_image} width={500} height={500} alt="bg_img" />
      </Box>
      <Container
        sx={{
          pt: 20,
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={8} md={4}>
              <Box>
                <Typography variant="h2" component="h1" fontWeight={600}>
                  Working For
                </Typography>
                <Typography variant="h3" component="h1" fontWeight={600}>
                  Dog{" "}
                  <Typography
                    variant="h3"
                    component="span"
                    fontWeight={600}
                    color={"primary.main"}
                  >
                    Breeder
                  </Typography>{" "}
                  Free,
                </Typography>
                <Typography variant="h3" component="h1" fontWeight={600}>
                  Happy Time
                </Typography>
                <Typography my={1} variant="h6" component={"p"}>
                  The best overall dog DNA test is embark breed & health Kit
                  view at chewy which provides you with breed brown and
                  information.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    padding: {
                      xs: "10px 10px",
                      sm: "10px 20px",
                      md: "10px 20px",
                      lg: "20px 30px",
                      xl: "20px 30px",
                    },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.2rem",
                      md: "1.2rem",
                      lg: "1.1rem",
                      xl: "1.1rem",
                    },
                    fontWeight: 600,
                    width: {
                      xs: "150px",
                      sm: "200px",
                      md: "200px",
                      lg: "200px",
                      xl: "200px",
                    },
                    my: "20px",
                  }}
                >
                  View More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={4} md={8}>
              <Grid container >
                <Grid item xs={8} md={6}>
                  <Swiper
                    autoplay={{ delay: 300 }}
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: ["-120%", 0, -500],
                      },
                      next: {
                        shadow: true,
                        translate: ["120%", 0, -500],
                      },
                    }}
                    className="mySwiper2 p-4 h-full"
                  >
                    <SwiperSlide>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          "& img": {
                            width: "100%",
                            height: "100%",
                          },
                        }}
                      >
                        <Image
                          src="https://medicine-plus.cmsmasters.net/wp-content/uploads/2015/08/bg-1.png"
                          width={1000}
                          height={500}
                          alt="Description"
                        />
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          "& img": {
                            width: "100%",
                            height: "100%",
                          },
                        }}
                      >
                        <Image
                          src="https://medicine-plus.cmsmasters.net/wp-content/uploads/2015/08/bg-4.png"
                          width={800}
                          height={500}
                          alt="Description"
                        />
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          "& img": {
                            width: "100%",
                            height: "100%",
                          },
                        }}
                      >
                        <Image
                          src="https://medicine-plus.cmsmasters.net/wp-content/uploads/2015/08/bg-1.png"
                          width={800}
                          height={500}
                          alt="Description"
                        />
                      </Box>
                    </SwiperSlide>
                  </Swiper>
                </Grid>
                <Grid item xs={4} md={6}>
                  <Box
                    sx={{
                      backgroundColor: "#ff5439",
                      padding: 5,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h1"
                      fontWeight={600}
                      color={"white"}
                    >
                      Dog Breeder
                    </Typography>
                    <Typography
                      variant="h3"
                      component="h1"
                      fontWeight={600}
                      color={"white"}
                    >
                      Available for
                    </Typography>
                    <Typography
                      variant="h3"
                      component="h1"
                      fontWeight={600}
                      color={"white"}
                    >
                      Breed
                    </Typography>
                    <Typography
                      my={1}
                      variant="h6"
                      component={"p"}
                      color={"white"}
                    >
                      The best overall dog DNA test is Embark Breed & Health Kit
                      (view at Chewy), which provid dogs
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        padding: {
                          xs: "10px 10px",
                          sm: "10px 20px",
                          md: "10px 20px",
                          lg: "20px 30px",
                          xl: "20px 30px",
                        },
                        fontSize: {
                          xs: "1rem",
                          sm: "1.2rem",
                          md: "1.2rem",
                          lg: "1.1rem",
                          xl: "1.1rem",
                        },
                        fontWeight: 600,
                        width: {
                          xs: "150px",
                          sm: "200px",
                          md: "200px",
                          lg: "200px",
                          xl: "200px",
                        },
                        my: "20px",
                        color: "white",
                      }}
                    >
                      View More
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box py={10}>
          <Grid container gap={2} justifyContent={"center"}>
            <Grid item xs={4} md={2.5}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  padding: "20px 8px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  fontWeight={600}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  73%
                </Typography>
                <Typography variant="h6" component="p" fontWeight={600}>
                  DOGS ARE FIRST BRED
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2.5}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  padding: "20px 8px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  fontWeight={600}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  298+
                </Typography>
                <Typography variant="h6" component="p" fontWeight={600}>
                  MOST DOGS ARE FIRST
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2.5}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  padding: "20px 8px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  fontWeight={600}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  39K
                </Typography>
                <Typography variant="h6" component="p" fontWeight={600}>
                  DOG BREEDING
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2.5}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  padding: "20px 8px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  fontWeight={600}
                  sx={{
                    "&:hover": {
                      color: "#f04336",
                    },
                  }}
                >
                  89+
                </Typography>
                <Typography variant="h6" component="p" fontWeight={600}>
                  YEARS OF HISTORY
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AdSection;
