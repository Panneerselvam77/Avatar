import React, { useState } from "react";
import { setAvatar } from "../utils/utils";
import "./avatar.css";

/**
 *Build skeleton for avatar picker components
 * Current Active avatar + stylling
 * Popover + styling
 * Click outside the popover should close
 * select avatar
 * any remaining animations
 */

const DEFAULT_AVATAR_ID = 1;

const Avatar = ({ source, label, onClick }) => {
  return (
    <div className="avatar">
      <img src={source} alt={label} onClick={onClick} />
    </div>
  );
};
const AvatarList = ({ avatars }) => {
  // Visible / hidden
  return (
    <div className="avatar-list visible">
      {avatars.map((avatar) => (
        <Avatar key={avatar.id} {...avatar} />
      ))}
    </div>
  );
};
export default function AvatarPicker({ avatars }) {
  const [activeAvatarId, setActiveAvatarId] = useState(DEFAULT_AVATAR_ID);
  const [showAvatarList, toggleAvatarListVisibility] = useState(false);

  const currentActiveAvatar = avatars.find(
    (avatar) => avatar.id === activeAvatarId
  );
  return (
    <div className="container">
      <Avatar
        onClick={() => {
          toggleAvatarListVisibility((prev) => !prev);
        }}
        {...currentActiveAvatar}
      />
      {showAvatarList ? <AvatarList avatars={avatars} /> : null}
    </div>
  );
}
