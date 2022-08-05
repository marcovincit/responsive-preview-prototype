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

export const Container = styled("div", {
  padding: "$9",
  display: "flex",
  flexDirection: "row",
  gap: "$10",
});

export const Item = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const ItemMenu = styled("div", {
  display: "inline-flex",
  flexDirection: "row",
  gap: "$2",
});

export const ItemCanvas = styled("iframe", {
  display: "inline-flex",
  flexDirection: "row",
  gap: "$2",
  border: 0,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Projects Responsive Preview - Prototype</title>
      </Head>

      <Container>
        {data.map(({ width, height }, index) => (
          <Item key={index}>
            <ItemMenu>
              <ButtonCircle size="small" css={{ width: "auto" }}>
                {width} x {height}
              </ButtonCircle>
              <ButtonCircle size="small">
                <MaterialIcon name="screen_rotation" />
              </ButtonCircle>
              <ButtonCircle size="small">
                <MaterialIcon name="close" />
              </ButtonCircle>
            </ItemMenu>
            <ItemCanvas
              width={width}
              height={height}
              src="https://projects.codesandbox.io/"
            />
          </Item>
        ))}
      </Container>

      {/* nav */}
      <ComboButton
        css={{
          position: "fixed",
          left: "$4",
          bottom: "$4",
        }}
      >
        <Button size="large">
          <MaterialIcon name="square" />
        </Button>
        <Button size="large">
          <MaterialIcon name="code" />
        </Button>
        <Button size="large" color="lime">
          <MaterialIcon name="aspect_ratio" />
        </Button>
      </ComboButton>
    </>
  );
}
