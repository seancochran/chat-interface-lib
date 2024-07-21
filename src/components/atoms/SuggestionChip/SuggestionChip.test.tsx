import React from "react";
import { render } from "@testing-library/react";

import SuggestionChip from "./SuggestionChip";

describe("SuggestionChip", () => {
    test("renders the SuggestionChip component", () => {
        render(<SuggestionChip label="Hello world!" />);
    });
});