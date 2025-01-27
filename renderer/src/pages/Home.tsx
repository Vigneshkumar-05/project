import DeviceSelector from "../components/DeviceSelector";
import HomeFeaturesList from "../components/HomeFeaturesList";
import About from "../components/About";

const Home: React.FunctionComponent = () => {
  return (
    <div className="min-w-fit flex justify-between">
      <section className="min-h-[90%] w-[55%] flex flex-col">
        <DeviceSelector />
        <HomeFeaturesList />
      </section>
      <section className="w-[50%]">
        <About />
      </section>
    </div>
  );
};

export default Home;
