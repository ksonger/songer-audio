import Container from "@/layout/Container";
import Card from "@/composed/Card";
import { Playground as CardPlayground } from "@/composed/Card/Card.stories";
import GridComponent from "./";

export default {
  title: "Layout/Grid",
  components: GridComponent,
  argTypes: {
    type: {
      options: ["flow", "fixed"],
      control: { type: "radio" },
    },
    columns: {
      options: [2, 3, 4, 5],
      control: { type: "select" },
    },
    gap: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    slideOnMobile: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => (
  <Container>
    <GridComponent {...args}>
      {[...Array(8).keys()].map((c, index) => (
        <Card key={index} {...CardPlayground.args} />
      ))}
    </GridComponent>
  </Container>
);

export const Grid = Template.bind({});
Grid.args = {
  type: "flow",
  columns: 3,
  gap: "medium",
  slideOnMobile: true,
  sliderProps: {
    navYOffset: 87,
    ariaLabel: "Card slider example",
  },
};
