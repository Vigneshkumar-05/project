import { createContext, useContext, useState } from "react";

type DeviceContextProviderPropsType = {
  children: React.ReactElement;
};

type ContextType = {
  deviceName: string;
  setDeviceName: React.Dispatch<React.SetStateAction<string>>;
};

const DeviceContext = createContext<ContextType>({
  deviceName: "",
  setDeviceName: () => undefined,
});

const DeviceContextProvider: React.FunctionComponent<
  DeviceContextProviderPropsType
> = ({ children }) => {
  const [deviceName, setDeviceName] = useState<string>("");

  return (
    <DeviceContext.Provider value={{ deviceName, setDeviceName }}>
      {children}
    </DeviceContext.Provider>
  );
};

const useDeviceContext = (): ContextType => {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error("Failed to use DeviceContext");
  }

  return context;
};

export { useDeviceContext, DeviceContextProvider };
