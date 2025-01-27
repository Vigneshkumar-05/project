import video from "../assets/video/wave.mp4";

const About: React.FunctionComponent = () => {
  return (
    <div className="md:min-h-[48rem] h-[39rem] p-2 flex flex-col justify-between bg-white shadow-lg">
      <div className="text-lg font-bold">
        <p className="custom-underline">About Us</p>
      </div>

      <div className="h-[60%] flex justify-center items-center">
        <video
          width={"100%"}
          height={"100%"}
          onClick={() => window.navigationApi.openScriptWindow()}
          controls
        >
          <source src={video} type="video/mp4" />
          <p>Video tag is not represented</p>
        </video>
      </div>

      <div className="md:h-[35%] h-[50%] overflow-auto scroll-smooth">
        <p className="max-w-[95%] leading-relaxed font-normal text-justify text-pretty">
          For decades, we have operated with a passion to create a better world
          by making electronics more affordable through semiconductors. We were
          pioneers in the transition of the world from vacuum tubes to
          transistors and then to integrated circuits (ICs) – and we’ve been
          advancing IC technology and the ability to reliably produce ICs in
          high volumes for decades. Each generation of innovation builds upon
          the last to make technology smaller, more efficient, more reliable and
          more affordable – making it possible for semiconductors to go into
          electronics everywhere. We think of this as Engineering Progress. It’s
          what we do and have been doing for decades:The object-detection
          capability used in a $20 million military radar system from the 1980s
          is now possible using a $20 radar chip in automobiles everywhere to
          increase vehicle safety and reduce collisions.Home automation systems
          that cost tens of thousands of dollars 20 years ago are now only
          hundreds of dollars. Today, these systems are more accessible to
          homeowners and are making homes safer, more convenient and more energy
          efficient.Technology that previously was only used in expensive
          factory robotic systems is affordable enough to be integrated into
          home appliances, making common household tasks, like vacuuming, easier
          and more convenient.Our passion to create a better world by making
          electronics more affordable through semiconductors is alive today as
          we help our customers develop new applications, particularly in the
          industrial and automotive markets.
        </p>
      </div>
    </div>
  );
};

export default About;
