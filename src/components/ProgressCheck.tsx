import { CircularProgress } from "@mui/joy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
  done: number;
}

export const ProgressCheck: React.FC<Props> = (props) => {
  const { done } = props;

  return (
    <CircularProgress color={done > 99 ? "success" : "danger"} determinate value={done} variant="soft" size="sm">
        {/*faCheck Haken faTimes Kreuz */}
      <FontAwesomeIcon
        icon={done > 99 ? faCheck: faTimes} size="2xl" height={12}
        color={done  > 99 ? "#1A7D36 " : "#d3232f"} 
      />
    </CircularProgress>
  );
};
