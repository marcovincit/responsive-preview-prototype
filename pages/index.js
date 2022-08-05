import React, { useState, useEffect } from "react";
import Head from "next/head";
import { MaterialIcon } from "components/icons";
import { ComboButton, Button } from "components/button";
import { ButtonCircle } from "components/button-circle";
import { styled } from "styles/stitches.config";

const data = [
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1440, height: 810 },
  { width: 1920, height: 1080 },
];

export const FullCanvas = styled("iframe", {
  width: "100vw",
  height: "100vh",
  border: 0,

  position: "fixed",
  top: 0,
  left: 0,

  zIndex: -1,
  opacity: 0,
  transition: "250ms",

  "&.active": {
    transition: "250ms 500ms",
    zIndex: 100,
    opacity: 1,
  },
});

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",

  zIndex: -1,
  opacity: 0,
  transition: "250ms",

  "&.active": {
    transition: "250ms 500ms",
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

  useEffect(() => {
    console.log(responsiveList);
  }, [responsiveList]);

  function handleFavorite(id) {
    const newResponsiveList = responsiveList.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setResponsiveList(newResponsiveList);
  }

  return (
    <>
      <Head>
        <title>Projects Responsive Preview - Prototype</title>
      </Head>

      <Container className={!responsiveMode ? "default" : "active"}>
        {data.map((item, index) => {
          const { width, height } = item;
          return (
            <Item key={index}>
              <ItemMenu>
                <ButtonCircle
                  size="small"
                  css={{
                    width: "auto",
                    fontSize: "$2",
                    color: "$foreground700",
                    paddingX: "$3",
                    "&:before": { opacity: 0.5 },
                  }}
                  color="purple"
                >
                  <span>
                    {width} x {height}
                  </span>
                </ButtonCircle>

                <ButtonCircle size="small">
                  <MaterialIcon name="screen_rotation" />
                </ButtonCircle>

                <ButtonCircle
                  size="small"
                  onClick={() => {
                    handleFavorite(item.id);
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
