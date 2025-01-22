import NavItems from "./NavItems";

function Navigation(): JSX.Element {
  return (
    <header className="flex items-center col-span-3 bg-[#c00] text-white">
      <div className="h-full mx-2 min-w-[10%] flex justify-center items-center text-xl font-bold">
        <h1 className="separator min-w-fit whitespace-nowrap">Motor Studio</h1>
      </div>
      <nav className="h-full ml-[1rem] min-w-[24rem] flex justify-between items-center text-xs">
        {NavItems.map((value, index) => (
          <div key={index}>
            <span className="cursor-pointer">{value.name}</span>
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Navigation;
