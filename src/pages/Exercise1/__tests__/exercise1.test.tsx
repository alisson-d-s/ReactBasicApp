import { render, fireEvent, waitFor } from "@testing-library/react";
import { Exercise1 } from "../Exercise1";

describe("<Exercise1 />", () => {

    it("should display buttons for add and subtract and reset, and a span for the number", async () => {
        const { findByTestId } = render(<Exercise1 />);

        const div = await findByTestId("number-span");

        expect(div.textContent).toBe("0");
    });

    it.todo("can add a number");

    it.todo("can subtract a number");

    it.todo("cannot be less than 0");

    it.todo("can reset");
});
