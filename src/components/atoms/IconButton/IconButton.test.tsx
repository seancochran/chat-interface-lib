import React from "react";
import { render } from "@testing-library/react";

import IconButton from "./IconButton";

describe("SuggestionChip", () => {
    test("renders the SuggestionChip component", () => {
        render(<IconButton iconName="Send" />);
    });
});