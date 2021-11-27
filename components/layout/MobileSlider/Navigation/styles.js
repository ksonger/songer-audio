import styled, { css } from "styled-components";
import { getVariable } from "@/styles/mixins/common";
import { logicalWithFallback } from "@/styles/mixins/layout";
import ButtonComponent from "./Button";

export const Navigation = styled.div`
  --slider-navigation-button-size: 42px;

  position: absolute;
  ${(p) =>
    logicalWithFallback({
      "inset-block-start":
        typeof p.$yOffset === "string" ? p.$yOffset : `${p.$yOffset}px`,
      "inset-inline-start": "var(--slider-navigation-inset-inline-start, 50%)",
      "inline-size":
        "var(--slider-navigation-inline-size, calc(var(--column-inline-size, 67%) + var(--slider-navigation-button-size)))",
    })}
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

const buttonStyles = css`
  ${logicalWithFallback({
    "inline-size": "var(--slider-navigation-button-size)",
    "block-size": "var(--slider-navigation-button-size)",
  })}
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: ${getVariable("palette", "defaultBgColor")};
  background-color: var(--accent-primary);
  border-radius: 50%;
  transition: opacity var(--transition-duration) var(--transition-timing),
    background-color var(--transition-duration) var(--transition-timing);

  &[aria-disabled="true"] {
    opacity: 0;
    pointer-events: none;
  }
`;

export const PrevButton = styled(ButtonComponent)`
  ${buttonStyles}

  &__icon {
    transform: translateX(-15%);
  }
`;

export const NextButton = styled(ButtonComponent)`
  ${buttonStyles}

  &__icon {
    transform: translateX(15%);
  }
`;
