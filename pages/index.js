import React, { useState, useEffect } from "react";

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
  background: "$background",
  color: "$text",
});

export const FullCanvas = styled("iframe", {
  width: "100vw",
  height: "100vh",
  border: 0,

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
});

export default function Home() {
  const [responsiveMode, setResponsiveMode] = useState(false);

  const [responsiveList, setResponsiveList] = useState([]);

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
                <ItemCanvas
                  width={width}
                  height={height}
                  src="https://projects.codesandbox.io/"
                />
              </Item>
            );
          })}
        </Container>

        <FullCanvas
          className={responsiveMode ? "default" : "active"}
          src="https://projects.codesandbox.io/"
        />
      </Page>

      {/* nav */}
      <ComboButton
        css={{
          position: "fixed",
          left: "$4",
          bottom: "$4",
          zIndex: 9999,
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
