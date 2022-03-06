import { renderHook } from "@testing-library/react-hooks";
import useFetch from "./useFetch";

const stubbedResponse = {
  name: 'Jane Citizen'
}
const url = 'bus-services.example.json';

describe("useFetch", () => {
  it("should return data after fetch", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(stubbedResponse),
      }),
    ) as jest.Mock;

    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    await waitForNextUpdate();

    expect(result.current.data).toEqual(stubbedResponse);
  });

  it("should catch error", async () => {
    const errorMessage = 'oops, error occurred!';

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: errorMessage,
        json: () => Promise.reject(stubbedResponse),
      }),
    ) as jest.Mock;

    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

    await waitForNextUpdate();

    expect(result.current.error).toEqual(errorMessage);
  });
});
