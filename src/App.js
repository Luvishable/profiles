import classes from "./App.module.css";
import ProfileList from "./components/profile/profileList";

const App = () => {
  return (
    <div className={classes.App}>
      <ProfileList />
    </div>
  );
};

export default App;
