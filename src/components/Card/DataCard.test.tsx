import { DUMMY } from "../../MockData";
import { fireEvent, render, screen } from "../../utils/test-utils";
import DataCard from "./DataCard";

// window.fetch = jest.fn();
// window.fetch.mockResolvedValueOnce({
//     json: async () => [DUMMY, DUMMY2]
// })
describe("DataCard Component", () => {
  const comp = <DataCard data={DUMMY} />;
  test("render data card page title", () => {
    render(comp);
    const titleElement = screen.getByText(
      /Dr. Fauci on whether politics of COVID boosters has gotten ahead of public health/i
    );
    expect(titleElement).toBeInTheDocument();
  });
  test("render data card page formated Date", () => {
    render(comp);
    const titleElement = screen.getByText(/Thursday Jun 17, 2021/i);
    expect(titleElement).toBeInTheDocument();
  });
  test("render data card button to origin", () => {
    render(comp);
    window.open = jest.fn();
    const buttomElement = screen.getByText("NAVIGATE TO DISPATCH");
    fireEvent.click(buttomElement);
    expect(window.open).toHaveBeenCalledWith(DUMMY.url, "_blank");
  });
});
