import DeviceSelector from "../components/DeviceSelector/DeviceSelector";
import HomeFeaturesList from "../components/HomeFeaturesList";
import About from "../components/About";

const Home: React.FunctionComponent = () => {
  return (
    <div className="min-w-fit flex justify-between">
      <section className="min-h-[90%] w-[55%] flex flex-col">
        <DeviceSelector />
        <div className="h-[40%] flex items-center">
          <HomeFeaturesList />
        </div>
      </section>
      <section className="w-[50%] flex items-center">
        <About />
      </section>
    </div>
  );
};

export default Home;

/*
[{
Header : About,
hero-content: video,
footer-text: description,

},]


*/
