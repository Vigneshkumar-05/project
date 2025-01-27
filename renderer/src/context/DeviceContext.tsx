import { createContext, useContext, useState } from "react";

type DeviceContextProviderPropsType = {
  children: React.ReactElement;
};

type ContextType = {
  deviceName: string | undefined;
  setDeviceName: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const DeviceContext = createContext<ContextType>({
  deviceName: undefined,
  setDeviceName: () => undefined,
});

const DeviceContextProvider: React.FunctionComponent<
  DeviceContextProviderPropsType
> = ({ children }) => {
  const [deviceName, setDeviceName] = useState<string | undefined>(undefined);

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
