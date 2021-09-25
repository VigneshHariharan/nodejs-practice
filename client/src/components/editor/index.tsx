// @refresh reset
import { useMemo, useState, useCallback , useEffect } from "react";
import {
  createEditor,
  BaseEditor,
  Descendant,
  Transforms,
  Editor,
} from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { Box, Text, Code, Button, Flex, Popover } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { createPost } from "dataHandler";
import { INote } from "types";
import {
  CodeElement,
  DefaultElement,
  useRenderCallbacks,
  CustomElement,
  CustomElementTypes,
  CustomText,
} from "./renderElements";
import { getTypeOfBlock, allowedKeybindings } from './utils'

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}


// Define a rendering function based on the element passed to `props`. We use
// `useCallback` here to memoize the function for subsequent renders.

let previousBlockType: CustomElementTypes;

function EditorComponent() {
  const editor = useMemo(() => withReact(createEditor()), []);

  const { mutate } = useMutation((post: INote) => createPost(post));


  const isCurrentCodeBlockType = (blockType: CustomElementTypes) => {
      const [match] = Editor.nodes(editor, {
        match: (n) => {
          return n.type === blockType},
      });

      return match
  }

  const { renderElement, renderLeaf } = useRenderCallbacks();
  const [value, setValue] = useState<Descendant[]>([
    {
      type: "p",
      children: [{ text: "A line of text in a paragraph." }],
    },
    {
      type: "code",
      children: [{ text: "const vignesh = 'Slate js fan'" }],
    },
    {
      type: "h1",
      children: [{ text: "Heading 1" }],
    },
    {
      type: "h2",
      children: [{ text: "Heading 2" }],
    },
    {
      type: "h3",
      children: [{ text: "Heading 3" }],
    },
    {
      type: "h4",
      children: [{ text: "Heading 4" }],
      isVoid: true
    },
    {
      type: "h5",
      children: [{ text: "Heading 5" }],
    },
    {
      type: "h6",
      children: [{ text: "Heading 6" }],
    },
  ]);

  const onChangeSlate = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  return (
    <Slate editor={editor} value={value} onChange={onChangeSlate}>
      <Box
        style={{
          paddingTop: 16,
          paddingBottom: 16,
          paddingRight: 4,
          paddingLeft: 4,
        }}
        width="100%"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          alignContent="center"
        >
          <Text fontSize="xl" pb={4}>
            Write down your notes..
          </Text>
          <Button
            size="sm"
            onClick={() => {
              if (!value) return;
              mutate({
                content: JSON.stringify(value),
                title: "Testing",
              });
            }}
          >
            Save
          </Button>
        </Flex>

        <Editable
        renderLeaf={renderLeaf}
          renderElement={renderElement}
          autoFocus
          onKeyDown={(event) => {
            console.log("event onKeydown : ", event);
            if (event.key === "ArrowDown") {
            }

            // const isCommandKey = event.code === "MetaLeft";

            if (
              allowedKeybindings.includes(event.key) &&
              (event.ctrlKey)
            ) {
              // Prevent the "`" from being inserted by default.
              event.preventDefault();
              // Determine whether any of the currently selected blocks are code blocks.
              const blockType = getTypeOfBlock(event.key);
              const isSameBlockTypeApplied = isCurrentCodeBlockType(
                previousBlockType || "p"
              );

              // Otherwise, set the currently selected blocks type to "code".
              Transforms.setNodes(
                editor,
                {
                  type: isSameBlockTypeApplied
                    ? blockType
                    : previousBlockType || "p",
                },
                { match: (n) => Editor.isBlock(editor, n) }
              );
            }
          }}
        />
      </Box>
    </Slate>
  );
}

export default EditorComponent;
