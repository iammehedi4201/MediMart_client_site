"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

const HeroSection = () => {
  useEffect(() => {
    const swiperInstance = (document.querySelector(".mySwiper") as any)?.swiper;
    if (swiperInstance) {
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <Box position="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              minHeight: "100vh",
              "& img": {
                width: "100%",
                minHeight: "100%",
                objectFit: "cover",
              },
            }}
          >
            <Image
              src="https://demo.fieldthemes.com/medicine/home2/modules/fieldslideshow/images/slider-111.jpg"
              layout="fill"
              objectFit="cover"
              alt="banner_1"
              style={{ zIndex: -2 }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
                zIndex: -1,
              }}
            />

            <Container>
              <Box
                sx={{
                  width: {
                    xs: "75%",
                    sm: "80%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                  },
                  mt: {
                    xs: "-120px",
                  },
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "4rem",
                      xl: "4rem",
                    },
                  }}
                >
                  Best Friend{" "}
                  <Typography
                    variant="h1"
                    component="span"
                    sx={{
                      backgroundColor: "#f04336",
                      fontWeight: 900,
                      color: "white",
                      border: "none",
                      padding: "10px 25px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: {
                        xs: "1rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "2rem",
                        xl: "2rem",
                      },
                      borderRadius: "10px 10px 20px 20px",
                      clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                      fontFamily: "Arial, sans-serif",
                      verticalAlign: "top",
                    }}
                  >
                    with
                  </Typography>
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "3rem",
                      xl: "4rem",
                    },
                  }}
                >
                  Happy Time
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color={"white"}
                  fontWeight={300}
                  my={2}
                  sx={{
                    fontSize: {
                      xs: "0.6rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "2rem",
                      xl: "1rem",
                    },
                  }}
                >
                  MediMart is a platform that connects patients with doctors and
                  pharmacies. It is a one-stop solution for all your medical
                  needs. where you can find all the information about doctors,
                  one place.
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
            </Container>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              minHeight: "100vh",
              "& img": {
                width: "100%",
                minHeight: "100vh",
                objectFit: "cover",
              },
            }}
          >
            <Image
              src="https://demo.fieldthemes.com/medicine/home2/modules/fieldslideshow/images/slider-222.jpg"
              layout="fill"
              objectFit="cover"
              alt="banner_1"
              style={{ zIndex: -2 }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
                zIndex: -1,
              }}
            />

            <Container>
              <Box
                sx={{
                  width: {
                    xs: "75%",
                    sm: "80%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                  },
                  mt: {
                    xs: "-120px",
                  },
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "4rem",
                      xl: "4rem",
                    },
                  }}
                >
                  Best Friend{" "}
                  <Typography
                    variant="h1"
                    component="span"
                    sx={{
                      backgroundColor: "#f04336",
                      fontWeight: 900,
                      color: "white",
                      border: "none",
                      padding: "10px 25px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: {
                        xs: "1rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "2rem",
                        xl: "2rem",
                      },
                      borderRadius: "10px 10px 20px 20px",
                      clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                      fontFamily: "Arial, sans-serif",
                      verticalAlign: "top",
                    }}
                  >
                    with
                  </Typography>
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "4rem",
                      xl: "4rem",
                    },
                  }}
                >
                  Happy Time
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color={"white"}
                  my={2}
                  fontWeight={300}
                  sx={{
                    fontSize: {
                      xs: "0.6rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "2rem",
                      xl: "1rem",
                    },
                  }}
                >
                  MediMart is a platform that connects patients with doctors and
                  pharmacies. It is a one-stop solution for all your medical
                  needs. where you can find all the information about doctors, one place.
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
            </Container>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              minHeight: "100vh",
              "& img": {
                width: "100%",
                minHeight: "100vh",
                objectFit: "cover",
              },
            }}
          >
            <Image
              src="https://demo.fieldthemes.com/medicine/home3/modules/fieldslideshow/images/slider-111.jpg"
              layout="fill"
              objectFit="cover"
              alt="banner_1"
              style={{ zIndex: -2 }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
                zIndex: -1,
              }}
            />

            <Container>
              <Box
                sx={{
                  width: {
                    xs: "75%",
                    sm: "80%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                  },
                  mt: {
                    xs: "-120px",
                  },
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "4rem",
                      xl: "4rem",
                    },
                  }}
                >
                  Best Friend{" "}
                  <Typography
                    variant="h1"
                    component="span"
                    sx={{
                      backgroundColor: "#f04336",
                      fontWeight: 900,
                      color: "white",
                      border: "none",
                      padding: "10px 25px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: {
                        xs: "1rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "2rem",
                        xl: "2rem",
                      },
                      borderRadius: "10px 10px 20px 20px",
                      clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                      fontFamily: "Arial, sans-serif",
                      verticalAlign: "top",
                    }}
                  >
                    with
                  </Typography>
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  color={"white"}
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "4rem",
                      xl: "4rem",
                    },
                  }}
                >
                  Happy Time
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color={"white"}
                  fontWeight={300}
                  my={2}
                  sx={{
                    fontSize: {
                      xs: "0.6rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "2rem",
                      xl: "1rem",
                    },
                  }}
                >
                  MediMart is a platform that connects patients with doctors and
                  pharmacies. It is a one-stop solution for all your medical
                  needs. where you can find all the information about doctors, one place.
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
            </Container>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroSection;
