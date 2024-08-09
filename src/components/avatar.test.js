import React from "react";
import { render, screen } from "@testing-library/react";
import AvatarPicker from "./AvatarPicker";

const mockAvatars = [
  { id: 1, source: "avatar1.png", label: "Avatar 1" },
  { id: 2, source: "avatar2.png", label: "Avatar 2" },
  { id: 3, source: "avatar3.png", label: "Avatar 3" },
];

describe("AvatarPicker", () => {
  test("renders the active avatar", () => {
    render(<AvatarPicker avatars={mockAvatars} />);
    // Check that the active avatar is rendered
    const activeAvatarImage = screen.getByAltText("Avatar 1");
    expect(activeAvatarImage).toBeInTheDocument();
    expect(activeAvatarImage).toHaveAttribute("src", "avatar1.png");
  });

  //   test("renders the avatar list", () => {
  //     render(<AvatarPicker avatars={mockAvatars} />);
  //     // Check that all avatars in the list are rendered
  //     mockAvatars.forEach((avatar) => {
  //       const avatarImage = screen.getByAltText(avatar.label);
  //       expect(avatarImage).toBeInTheDocument();
  //       expect(avatarImage).toHaveAttribute("src", avatar.source);
  //     });
  //   });

  // Add more tests if needed, like checking for user interaction
});
