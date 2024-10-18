import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

const Location = () => {
  const locations = [
    {
      name: "Hồ Chí Minh",
      imgUrl: "https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=375x&ar=1x1",
      places: "15,546 chỗ ở",
    },
    {
      name: "Đà Nẵng",
      imgUrl: "https://pix6.agoda.net/geo/city/16440/1_16440_02.jpg?ca=6&ce=1&s=375x&ar=1x1",
      places: "5,534 chỗ ở",
    },
    {
      name: "Vũng Tàu",
      imgUrl: "https://pix6.agoda.net/geo/city/17190/1_17190_02.jpg?ca=6&ce=1&s=375x&ar=1x1",
      places: "6,329 chỗ ở",
    },
    {
      name: "Hà Nội",
      imgUrl: "https://pix6.agoda.net/geo/city/2758/065f4f2c9fa263611ab65239ecbeaff7.jpg?ce=0&s=375x&ar=1x1",
      places: "10,744 chỗ ở",
    },
    {
      name: "Đà Lạt",
      imgUrl: "https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=375x&ar=1x1",
      places: "5,165 chỗ ở",
    },
    {
        name: "Đà Lạt",
        imgUrl: "https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=375x&ar=1x1",
        places: "5,165 chỗ ở",
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: 'ondemand', // Tải ảnh khi cần thiết
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <Box sx={{
        position: "absolute",
        marginTop:"400px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%", // Đặt width bằng 100% để fit toàn bộ khung
        maxWidth: 1000, // Giới hạn tối đa là 1000px
        overflow: "hidden", // Đảm bảo không có phần thừa ra
      }}>
      <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
        Các điểm đến thu hút nhất Việt Nam
      </Typography>
      <Slider {...settings}>
        {locations.map((location, index) => (
          <Card 
            key={index} 
            sx={{ 
              p: 1, 
              textAlign: "center", 
              borderRadius: "20px", 
              boxShadow: "none",
              marginRight:"300px", 
              width: "100%", // Đảm bảo ảnh chiếm toàn bộ chiều rộng của slider
            }}
          >
            <CardMedia
              component="img"
              image={location.imgUrl}
              alt={location.name}
              sx={{ 
                height: 200, 
                borderRadius: "20px", // Bo góc ảnh
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {location.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {location.places}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Location;
