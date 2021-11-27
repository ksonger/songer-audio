import styled from "styled-components";
import {
  lContainerInnerStyle,
  logicalWithFallback,
} from "@/styles/mixins/layout";

export const Container = styled.section`
  --block-size: ${(p) => (p.$stretchBlock ? "100%" : "auto")};

  ${logicalWithFallback({ "block-size": "var(--block-size)" })}

  ${(p) =>
    p.$padBlock &&
    logicalWithFallback({
      "padding-block-start": "var(--container-block-start-padding)",
      "padding-block-end": "var(--container-block-end-padding)",
    })}
`;

export const Inner = styled.div`
  ${(p) => lContainerInnerStyle(p.$width, p.$padInline)}
  ${logicalWithFallback({ "block-size": "var(--block-size)" })}
`;
