import styled from "styled-components";
import { respond, getVariable } from "@/styles/mixins/common";

export const FeaturedPostContainer = styled.div`
  ${respond(
    `--callout-label-display: none;`,
    getVariable("breakpoint", "callout")
  )}
`;
