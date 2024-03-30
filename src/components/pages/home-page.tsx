import BatteryIndicator from '../battery-indicator';
import Navbar from '../layouts/navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <BatteryIndicator />
    </>
  );
}

export default HomePage;
