import { Store } from "../../services/Store";
import { HomeView } from "./View";
import { HomeViewModel } from "./ViewModel";

const store = new Store()
const homeViewModel = new HomeViewModel(store);

export const Home: React.FC = () => {
  return <HomeView homeViewModel={homeViewModel} />
}