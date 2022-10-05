import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(({ dark, theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.secondary.dark,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.secondary.dark,
  },
}));
