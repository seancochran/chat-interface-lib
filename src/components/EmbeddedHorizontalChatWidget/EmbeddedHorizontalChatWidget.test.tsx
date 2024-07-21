import React from "react";
import { render } from "@testing-library/react";

import EmbeddedHorizontalChatWidget from "./EmbeddedHorizontalChatWidget";

describe("EmbeddedHorizontalChatWidget", () => {
    test("renders the EmbeddedHorizontalChatWidget component", () => {
        render(<EmbeddedHorizontalChatWidget connectionType="" />);
    });
});