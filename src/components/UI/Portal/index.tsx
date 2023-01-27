import { FC, useLayoutEffect, useState } from "react";

import { createWrapperAndAppendToBody } from "@helpers/createWrapperAndAppendToBody";
import { createPortal } from "react-dom";

import { IPortalProps } from "./portalProps";

export const Portal: FC<IPortalProps> = ({ children, wrapperId }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLDivElement | null>(
    null
  );
  let systemCreated = false;

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId) as HTMLDivElement;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};
