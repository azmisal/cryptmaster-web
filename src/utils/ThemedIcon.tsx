import React from "react";
import { IconType } from "react-icons";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ThemedIconProps {
  Icon: IconType; // Still accept IconType
  size?: number;
  color?: string;
}

const ThemedIcon: React.FC<ThemedIconProps> = ({ Icon, size, color }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Force TypeScript to treat it as a React component
  const IconComponent = Icon as React.ComponentType<{ size?: number; color?: string }>;

  return (
    <IconComponent
      size={size || (isSmallScreen ? 16 : 20)}
      color={color || theme.palette.text.secondary}
    />
  );
};

export default ThemedIcon;
