import React from "react";
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
const Appbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
        padding: "0 24px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://cdn6.agoda.net/images/MVC/default/agoda-logo-v2.png"
            alt="Agoda"
            style={{ height: "40px", marginRight: "16px" }}
          />
         
          <Button href="/OrderAirPlane"sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
            Máy bay + K.sạn
          </Button>
          <Button sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
            Chỗ ở
          </Button>
          <Button sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
            Phương tiện di chuyển
          </Button>
          <Button sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
            Hoạt động
          </Button>
          <Button sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
            Phiếu giảm giá và ưu đãi
          </Button>
        </Box>

        {/* Nút đăng nhập & tạo tài khoản */}
        <Box>
          <Button sx={{ color: "#000" }}>
            <ShoppingCartOutlinedIcon />
          </Button>
          <Button href="/account/login" sx={{ color: "#000", textTransform: "none", fontSize: 16 }}>
            Đăng nhập
          </Button>
          <Button
            href="/account/signup"
            sx={{
              color: "#000",
              textTransform: "none",
              fontSize: 16,
              border: "1px solid #000",
              marginLeft: "8px",
              padding: "4px 16px",
              borderRadius: "20px",
            }}
          >
            Tạo tài khoản
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
