// Author: Madhav Dutta
// Date : 26th April 2024
// Description: IfElse component is a conditional rendering component that renders one of two child components based on a given condition.

import React from "react";
import type { IfElseProps } from "./ifElseType";

export const IfElse: React.FC<IfElseProps> = ({ condition, children }) => {
  // Check if the number of child elements is exactly two
  if (children.length !== 2) {
    // Throw an error if the number of child elements is not two
    throw new Error("IfElse component expects exactly two child elements.");
  }

  // Convert the children prop to an array using React.Children.toArray
  const [trueComponent, falseComponent] = React.Children.toArray(children);

  // Render the trueComponent if the condition is true, otherwise render the falseComponent
  return <>{condition ? trueComponent : falseComponent}</>;
};