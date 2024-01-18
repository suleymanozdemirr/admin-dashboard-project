import { styled } from "@mui/material/styles"
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: 390,
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#49c96d" : "#49c96d",
  },
}))

export default function ProgressBar() {
  return <BorderLinearProgress variant='determinate' value={50} />
}
