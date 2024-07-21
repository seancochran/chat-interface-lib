import React from "react";
import { render } from "@testing-library/react";

import EmbeddedVerticalChatWidget from "./EmbeddedVerticalChatWidget";

describe("EmbeddedVerticalChatWidget", () => {
    test("renders the EmbeddedVerticalChatWidget component", () => {
        render(<EmbeddedVerticalChatWidget connectionType="" />);
    });
});