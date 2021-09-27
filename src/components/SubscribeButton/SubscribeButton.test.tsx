import { render, screen, fireEvent } from "@testing-library/react";
import { signIn } from "next-auth/client";
import { mocked } from "ts-jest/utils";
import { SubscribeButton } from ".";

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false];
    },
    signIn: jest.fn(),
  };
});

describe("SubscribeButton Component", () => {
  it("renders correctly", () => {
    render(<SubscribeButton />);

    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });

  it("redirects user when not authenticated", () => {
    const signInMocked = mocked(signIn);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });
});
