const headerItems = [
  {
    name: "File",
    submenu: [
      {
        name: "Load registers",
        action: () => {
          console.log("Load registers clicked");
        },
      },
      {
        name: "Save registers",
        action: () => {
          console.log("Save registers clicked");
        },
      },
      {
        name: "Compare Tuning Files",
        action: () => {
          console.log("Compare Tuning Files clicked");
        },
      },
    ],
  },
  {
    name: "Options",
    submenu: [
      {
        name: "Serial Port",
        action: () => {
          console.log("Serial Port clicked");
        },
      },
    ],
  },
  {
    name: "Tools",
    submenu: [
      {
        name: "Open Scripting Windows",
        action: async () => {
          window.navigationApi.openScriptWindow();
        },
      },
    ],
  },
  {
    name: "Help",
    submenu: [
      {
        name: "Product Page",
        action: () => {
          console.log("Product Page clicked");
        },
      },
      {
        name: "Tool Guide",
        action: () => {
          console.log("Tool Guide clicked");
        },
      },
      {
        name: "E2E Support",
        action: () => {
          console.log("E2E Support clicked");
        },
      },
      {
        name: "View Readme",
        action: () => {
          console.log("View Readme clicked");
        },
      },
      {
        name: "About",
        action: () => {
          console.log("About clicked");
        },
      },
    ],
  },
  {
    name: "Documents",
    submenu: [
      {
        name: "User's Guide",
        action: () => {
          console.log("User's Guide clicked");
        },
      },
      {
        name: "Tuning Guide",
        action: () => {
          console.log("Tuning Guide clicked");
        },
      },
      {
        name: "Datasheet",
        action: () => {
          console.log("Datasheet clicked");
        },
      },
    ],
  },
];

export default headerItems;
