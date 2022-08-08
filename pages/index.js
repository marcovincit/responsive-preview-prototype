import React, { useState, useEffect } from "react";
import { Body } from "components/typography";
import { MaterialIcon } from "components/icons";
import { ComboButton, Button } from "components/button";
import { ButtonCircle } from "components/button-circle";
import { lightTheme, styled } from "styles/stitches.config";

const data = [
  { id: 1, width: 390, height: 844 },
  { id: 2, width: 768, height: 1024 },
  { id: 3, width: 1440, height: 810 },
  { id: 4, width: 1920, height: 1080 },
];

export const Page = styled("div", {
  minWidth: "100vw",
  minHeight: "100vh",
  background: "$background",
  color: "$text",
});

export const FullCanvas = styled("iframe", {
  width: "100vw",
  height: "100vh",
  border: 0,
  background: "white",

  position: "fixed",
  top: 0,
  left: 0,

  zIndex: -1,
  opacity: 0,
  transition: "opacity 250ms",

  "&.active": {
    transition: "opacity 250ms 500ms",
    zIndex: 100,
    opacity: 1,
  },
});

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  minWidth: "100vw",
  minHeight: "100vh",

  zIndex: -1,
  opacity: 0,
  transition: "opacity 250ms",

  "&.active": {
    transition: "opacity 250ms 500ms",
    zIndex: 100,
    opacity: 1,
  },
});

export const Item = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  padding: "$9",
});

export const ItemMenu = styled("div", {
  display: "inline-flex",
  flexDirection: "row",
  gap: "$2",
});

export const ItemCanvas = styled("iframe", {
  border: 0,
  background: "white",
});

export const Dialog = styled("dialog", {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 9999,

  background: "rgba(0, 0, 0, 0.75)",

  textAlign: "center",
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  margin: 0,

  padding: "$4",

  width: 300,

  background: "$neutral700",
  color: "$text",
  borderRadius: "$2",
});

export const Input = styled("input", {
  backgroundColor: "$background",
  border: "solid 1px $neutral600",
  borderRadius: "$2",
  lineHeight: "$100",
  outline: "none",
  color: "$text",
  fontSize: "$3",
  padding: "10px",
  gap: "5px",
  borderRadius: "5px",
  // textAlign: "center",

  appearance: "textfield",

  "&::-webkit-inner-spin-button": {
    appearance: "none",
  },

  "&::-webkit-outer-spin-button": {
    appearance: "none",
  },

  "&:focus": {
    border: "solid 1px $neutral400",
  },
});

export default function Home() {
  const url = "https://www.lakgallery.com/";
  // const url = "https://www.russiklenner.de/";
  const [responsiveMode, setResponsiveMode] = useState(false);
  const [responsiveList, setResponsiveList] = useState([]);

  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    setResponsiveList(data);
  }, []);

  //remove
  function removeItem(id) {
    const newResponsiveList = responsiveList.filter((item) => {
      return item.id !== id;
    });

    setResponsiveList(newResponsiveList);
  }

  //input state

  function useInput(opts) {
    const [value, setValue] = useState("");
    const input = (
      <Input
        value={value}
        type="number"
        onChange={(e) => setValue(e.target.value)}
        {...opts}
        required
      />
    );

    return [value, input];
  }

  const [newItemWidth, newItemWidthInput] = useInput({ placeholder: "Width" });
  const [newItemHeight, newItemHeightInput] = useInput({
    placeholder: "Height",
  });

  // addItem
  function addItem(id) {
    if (newItemWidth === "" || newItemHeight === "") {
      setDialog(true);
      return;
    }
    setDialog(false);
    setResponsiveList([
      ...responsiveList,
      {
        width: newItemWidth,
        height: newItemHeight,
        id: responsiveList.length + 1,
      },
    ]);
    return false;
  }

  //rotate
  function rotate(id) {
    const newResponsiveList = responsiveList.map((item) => {
      if (item.id === id) {
        const newWidth = item.height;
        const newHeight = item.width;

        item.width = newWidth;
        item.height = newHeight;
      }
      return item;
      // return item.id === id;
    });

    setResponsiveList(newResponsiveList);
  }

  return (
    <>
      <Page>
        <Container className={!responsiveMode ? "default" : "active"}>
          {responsiveList.map((item, index) => {
            const { width, height, id } = item;
            return (
              <Item key={index}>
                <ItemMenu>
                  <ButtonCircle
                    size="small"
                    css={{
                      width: "auto",
                      fontSize: "$1",
                      fontWeight: "$medium",
                      lineHeight: "$100",
                      color: "$neutral200",
                      paddingX: "$3",
                      "&:before": { opacity: 1 },
                    }}
                    color="lime"
                  >
                    <span>
                      {width} x {height}
                    </span>
                  </ButtonCircle>

                  <ButtonCircle
                    size="small"
                    onClick={() => {
                      rotate(id);
                    }}
                  >
                    <MaterialIcon name="screen_rotation" />
                  </ButtonCircle>

                  <ButtonCircle
                    size="small"
                    onClick={() => {
                      removeItem(id);
                    }}
                  >
                    <MaterialIcon name="close" />
                  </ButtonCircle>
                </ItemMenu>
                <ItemCanvas width={width} height={height} src={url} />
              </Item>
            );
          })}

          {/* add */}

          <Item
            css={{
              width: "100%",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <ButtonCircle size="medium" onClick={() => setDialog(true)}>
              <MaterialIcon name="add" />
            </ButtonCircle>
            <Body size={4} css={{ width: 600 }} onClick={() => setDialog(true)}>
              Add responsive view
            </Body>

            {/* Dialog */}
            <Dialog open={dialog}>
              <Form method="dialog">
                {/* input */}
                {newItemWidthInput}
                {newItemHeightInput}
                {/* buttons */}
                <Button type="submit" onClick={() => addItem()}>
                  Confirm
                </Button>
                <Button id="cancel" text onClick={() => setDialog(false)}>
                  Cancel
                </Button>{" "}
              </Form>
            </Dialog>
          </Item>
        </Container>

        <FullCanvas
          className={responsiveMode ? "default" : "active"}
          src={url}
        />
      </Page>

      {/* nav */}
      <ComboButton
        css={{
          position: "fixed",
          left: "$4",
          bottom: "$4",
          zIndex: 8888,
        }}
      >
        <Button size="large">
          <MaterialIcon name="square" />
        </Button>
        <Button size="large">
          <MaterialIcon name="code" />
        </Button>
        <Button
          size="large"
          color={responsiveMode ? "lime" : "default"}
          onClick={() => setResponsiveMode(!responsiveMode)}
        >
          <MaterialIcon name="aspect_ratio" />
        </Button>
      </ComboButton>
    </>
  );
}
