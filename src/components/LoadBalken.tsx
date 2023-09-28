import { LinearProgress, Typography } from "@mui/joy";
import styles from "../styles/LoadBalken.module.css";

interface Props {
  titel: string;
  progress: number;
}

//LoadBalken im Header
export const LoadBalken: React.FC<Props> = (props) => {
  const { titel, progress } = props;

  return (
    <div className={styles.balkencontainer}>
      <LinearProgress
        sx={{ width: 200 }}
        determinate
        variant="soft"
        thickness={20}
        color="success"
        value={progress}
      >
        <Typography
          level="body2"
          fontWeight="l"
          textColor="common.white"
          sx={{ mixBlendMode: "difference" }}
        >
          {titel}
          {`${Math.round(progress)}%`}
        </Typography>
      </LinearProgress>
    </div>
  );
};
