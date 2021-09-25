const keyboardBindings = {
  code: "`",
  h1: "1",
  h2: "2",
  h3: "3",
  h4: "4",
  h5: "5",
  h6: "6",
  paragraph: "p",
  bold:"b"
};

export const wrapperKeyTypes = ['bold','italic'] 

export const allowedKeybindings = Object.values(keyboardBindings);

export const getTypeOfBlock = (eventKey: string) => {
  let keyBinding = "paragraph";

  Object.entries(keyboardBindings).map(([key, value]) => {
    if (value === eventKey) {
      keyBinding = key;
    }
  });
  return keyBinding;
};


