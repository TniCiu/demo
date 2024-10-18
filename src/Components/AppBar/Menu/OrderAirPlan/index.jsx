import React, { useState } from "react";
import { Typography,Box,TextField, Button, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { FlightTakeoff, FlightLand, DateRange, People } from '@mui/icons-material'
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import Location from "../../../../Home/location";
import Promotion from "../../../../Home/promotion";
const OrderAirPlane = () => {
  const [flightType, setFlightType] = useState("one-way");
  const [fromLocation, setFromLocation] = useState(""); // State for "Bay từ"
  const [toLocation, setToLocation] = useState("");   // State for "Bay đến"

  // Function to swap the values of "Bay từ" and "Bay đến"
  const handleSwap = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };
  return (
    <>
    <Box style={{ position: "relative" }}>
      {/* Banner Image */}
      <Box
        style={{
          backgroundImage: "url('https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png')",
          height: "400px", 
          width:"100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "8px",
          marginBottom: "20px",
          position: "relative"
        }}
      >
         <Box
          sx={{
            position: "absolute",
            top: "20px", // Đặt vị trí ở trên cùng của banner
            left: "50%",
            marginTop:"70px",
            transform: "translateX(-50%)",
            textAlign: "center", // Căn giữa văn bản
            color: "#fff", // Màu chữ trắng
            zIndex: 1
          }}
        >
          <Typography variant="h5" component="h2" style={{ margin: 0 }}>
            ĐẶT VÉ MÁY BAY TỐT NHẤT TRÊN TÍN CÙI NGAY HÔM NAY
          </Typography>
          <Typography variant="body1" style={{ margin: 0 }}>
            Nhanh chóng tìm và đặt hơn 200 hãng hàng không trên toàn thế giới
          </Typography>
        </Box>
        <Box style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the form
          backgroundColor: "#f8f8fa",
          padding: "35px",
          marginTop:"200px",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Add shadow for a nice effect
          width: "800px", // Adjust width of the form
        }}>
          {/* Flight Type Selection */}
          <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <Button sx={{ borderRadius: "20px", textTransform: "none" }}variant="outlined" onClick={() => setFlightType("one-way")} color={flightType === "one-way" ? "primary" : "default"}>Một chiều</Button>
            <Button sx={{ borderRadius: "20px", textTransform: "none" }}variant="outlined" onClick={() => setFlightType("round-trip")} color={flightType === "round-trip" ? "primary" : "default"}>Khứ hồi</Button>
            <FormControlLabel
              control={<Checkbox />}
              label="Chỉ bay thẳng"
              style={{ marginLeft: "auto" }}
            />
          </Box>

          {/* Flight Details */}
          <Box sx={{backgroundColor:"#fff", display: "flex", gap: "10px", marginBottom: "20px" }}>
            <TextField
              fullWidth
              label="Bay từ"
              variant="outlined"
              color="#fff"
              InputProps={{ startAdornment: <FlightTakeoff /> }}
            />
             <IconButton onClick={handleSwap} sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>
             <SwapHorizOutlinedIcon sx={{ fontSize: 35, color: "black",   }} />
            </IconButton>
            <TextField
              fullWidth
              label="Bay đến"
              variant="outlined"
              InputProps={{ startAdornment: <FlightLand /> }}
            />
          </Box>

          {/* Date Inputs */}
          <Box sx={{backgroundColor:"#fff", display: "flex", gap: "10px", marginBottom: "20px" }}>
            <TextField
              fullWidth
              type="date"
              label="Ngày đi"
              InputLabelProps={{ shrink: true }}
              InputProps={{ startAdornment: <DateRange /> }}
            />
            {flightType === "round-trip" && (
              <TextField
                fullWidth
                type="date"
                label="Ngày về"
                InputLabelProps={{ shrink: true }}
                InputProps={{ startAdornment: <DateRange /> }}
              />
            )}
          </Box>

          {/* Passenger Input */}
            <Box sx={{backgroundColor:"#fff", display: "flex", gap: "10px", marginBottom: "20px" }}>

            <TextField
              fullWidth
              select
              label="Hành khách"
              SelectProps={{ native: true }}
              InputProps={{ startAdornment: <People /> }}
              sx={{

              }}
            >
             
            </TextField>
            </Box>

          {/* Add Hotel Option */}
          <FormControlLabel
            control={<Checkbox />}
            label="Thêm khách sạn để tiết kiệm tới 25%"
            style={{ marginBottom: "20px" }}
          />
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginBottom: "20px", backgroundColor: "#ff4d4f", color: "#fff" }}
          >
            Đặt gói để Tiết kiệm
          </Button>

          {/* Search Flight Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            TÌM CHUYẾN BAY
          </Button>
        </Box>
      </Box>
    </Box>
    <Location/>
    <Promotion/>
    </>
  );
};

export default OrderAirPlane;
