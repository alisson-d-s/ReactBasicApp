import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { Exercise1 } from "../Exercise1";

describe("<Exercise1 />", () => {
    // let number: HTMLElement,
    //     subtractButton: HTMLElement,
    //     addButton: HTMLElement,
    //     resetButton: HTMLElement;

    // beforeAll(async () => {
    //     const { findByTestId } = render(<Exercise1 />);

    //     number = await findByTestId("number");
    //     subtractButton = await findByTestId("subtractButton");
    //     addButton = await findByTestId("addButton");
    //     resetButton = await findByTestId("resetButton");
    // });

    it("should display buttons for add, subtract and reset, and a span for the number with the value 0", async () => {
        const { findByTestId } = render(<Exercise1 />);

        const number = await findByTestId("number");
        const subtractButton = await findByTestId("subtractButton");
        const addButton = await findByTestId("addButton");
        const resetButton = await findByTestId("resetButton");

        expect(number).toBeInTheDocument;
        expect(number.textContent).toBe("0");
        expect(subtractButton).toBeInTheDocument;
        expect(addButton).toBeInTheDocument;
        expect(resetButton).toBeInTheDocument;
    });

    it("should add a number when click on add button", async () => {
        const { findByTestId } = render(<Exercise1 />);

        const number = await findByTestId("number");
        const addButton = await findByTestId("addButton");

        await userEvent.click(addButton);
        expect(number.textContent).toBe("1");

        await userEvent.click(addButton);
        expect(number.textContent).toBe("2");
    });

    it("should subtract a number when click on subtract button", async () => {
        const { findByTestId } = render(<Exercise1 />);

        const number = await findByTestId("number");
        const addButton = await findByTestId("addButton");
        const subtractButton = await findByTestId("subtractButton");

        await userEvent.click(addButton);
        await userEvent.click(addButton);

        await userEvent.click(subtractButton);
        expect(number.textContent).toBe("1");

        await userEvent.click(subtractButton);
        expect(number.textContent).toBe("0");
    });

    it("cannot be less than 0", async () => {
        const { findByTestId } = render(<Exercise1 />);

        const number = await findByTestId("number");
        const subtractButton = await findByTestId("subtractButton");

        await userEvent.click(subtractButton);
        expect(number.textContent).toBe("0");
    });

    it("can reset", async () => {
        const { findByTestId } = render(<Exercise1 />);

        const number = await findByTestId("number");
        const addButton = await findByTestId("addButton");
        const resetButton = await findByTestId("resetButton");

        await userEvent.click(addButton);
        await userEvent.click(addButton);
        await userEvent.click(addButton);

        await userEvent.click(resetButton);
        expect(number.textContent).toBe("0");
    });
});
