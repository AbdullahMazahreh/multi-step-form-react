import ApplicationRoutes from "./routes/ApplicationRoutes";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <ApplicationRoutes />
    </div>
  );
}

export default App;
