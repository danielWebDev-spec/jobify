import { useAppContext } from "../context/appContext";

function Alert() {
  const { alertType, alertText } = useAppContext();
  return (
    <div className={`alert alert-${alertType}`}>
      <div>{alertText}</div>
    </div>
  );
}
export default Alert;
