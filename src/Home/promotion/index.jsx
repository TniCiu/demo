import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardActionArea } from '@mui/material';

// Mock data for promotions
const promotionData = {
  accommodation: [
    {
      title: 'Nhận mọi ưu đãi của quý khách tại đây!',
      image: 'https://cdn6.agoda.net/images/WebCampaign/dealspagebanner_hp_web/vi-vn.png',
      link: '#',
    },
    {
      title: 'CityHouse Promotion',
      image: 'https://cdn6.agoda.net/images/WebCampaign/pulse_flagshipstorecampaign_cityhouse_vn/home_banner_web/vi-vn.png',
      link: '#',
    },
    {
        title: 'EVA Air Promotion',
        image: 'https://7304094.fs1.hubspotusercontent-na1.net/hubfs/7304094/flight_ops/marketing%20campaigns/Malaysia%20Airlines/globalOTA/mspa/en-us.png',
        link: '#',
      },
  ],
  flightsAndActivities: [
    {
      title: 'Malaysia Airlines Promotion',
      image: 'https://7304094.fs1.hubspotusercontent-na1.net/hubfs/7304094/flight_ops/marketing%20campaigns/Malaysia%20Airlines/globalOTA/mspa/en-us.png',
      link: '#',
    },
    {
      title: 'EVA Air Promotion',
      image: 'https://7304094.fs1.hubspotusercontent-na1.net/hubfs/7304094/flight_ops/marketing%20campaigns/Malaysia%20Airlines/globalOTA/mspa/en-us.png',
      link: '#',
    },
    {
        title: 'EVA Air Promotion',
        image: 'https://7304094.fs1.hubspotusercontent-na1.net/hubfs/7304094/flight_ops/marketing%20campaigns/Malaysia%20Airlines/globalOTA/mspa/en-us.png',
        link: '#',
      },
  ],
};

const Promotion = () => {
  return (
    <Box sx={{ position: "absolute",
        marginTop:"800px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%", // Đặt width bằng 100% để fit toàn bộ khung
        maxWidth: 1000, // Giới hạn tối đa là 1000px
        overflow: "hidden", // Đảm bảo không có phần thừa ra 
        }}>
      {/* Khuyến mãi chỗ ở */}
      <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
        Chương trình khuyến mãi chỗ ở
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {promotionData.accommodation.map((promo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea href={promo.link}>
                <CardMedia
                  component="img"
                  height="140"
                  image={promo.image}
                  alt={promo.title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Khuyến mãi Chuyến bay và Hoạt động */}
      <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
        Khuyến mãi Chuyến bay và Hoạt động
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {promotionData.flightsAndActivities.map((promo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea href={promo.link}>
                <CardMedia
                  component="img"
                  height="140"
                  image={promo.image}
                  alt={promo.title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Promotion;
