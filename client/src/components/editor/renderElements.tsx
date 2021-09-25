import { Box, Text, Code, Button, Flex, Popover,  Heading} from "@chakra-ui/react";
import { useCallback  }  from 'react'
import { Location, Path } from 'slate'

export type CustomElementTypes =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "code";

export type CustomElement = {
  type: CustomElementTypes;
  children: CustomText[];
  isVoid?: boolean;
  bold?: boolean;
  italic?: boolean;
};
export type CustomText = { text: string };


const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <Code>{props.children}</Code>
    </pre>
  );
};

const BlockWrapperElement = (props: any) => {
  return <Box
  //  _hover={{ backgroundColor:'gray.700', transition:'background-color 1s' }}
>{props.children}</Box>;
};

const DefaultElement = (props: any) => {
  return (
    <BlockWrapperElement>
    <p {...props.attributes} style={{}}>
      {props.children}
    </p>
    </BlockWrapperElement>
  );
};


export const useRenderCallbacks = () => {

  const renderLeaf = useCallback(({ attributes, children, leaf }) => {
    // console.log('renderLeaf : ',leaf)
    return <span {...attributes}>{children}</span>;
  },[]);

  const renderElement = useCallback((props) => {
    // console.log('renderElement : ',props,Path)
    const elementType: CustomElementTypes = props.element.type 
    switch (elementType) {
      case "code":
        return (
          <BlockWrapperElement>
            <CodeElement {...props} />
          </BlockWrapperElement>
        );
      case "h1":
        return (
          <BlockWrapperElement>
            <h1 {...props.attributes} style={{ fontSize: "2em" }}>
              {props.children}
            </h1>
         </BlockWrapperElement>
        );
      case "h2":
        return (
          <BlockWrapperElement>
            <h2 {...props.attributes} style={{ fontSize: "1.5em" }}>
              {props.children}
            </h2>
          </BlockWrapperElement>
        );
      case "h3":
        return (
          <BlockWrapperElement>
            <h3 {...props.attributes} style={{ fontSize: "1.17em" }}>
              {props.children}
            </h3>
          </BlockWrapperElement>
        );
      case "h4":
        return (
          <BlockWrapperElement>
          <h4 {...props.attributes} style={{ fontSize: "1em" }}>
            {props.children}
          </h4>
          </BlockWrapperElement>
        );
      case "h5":
        return (
          <BlockWrapperElement>
          <h5 {...props.attributes} style={{ fontSize: "0.83em" }}>
            {props.children}
          </h5>
          </BlockWrapperElement>
        );
      case "h6":
        return (
          <BlockWrapperElement>
          <h6 {...props.attributes} style={{ fontSize: "0.67em" }}>
            {props.children}
          </h6>
          </BlockWrapperElement>
        );
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return { renderElement, renderLeaf };
};

export { CodeElement, DefaultElement };
