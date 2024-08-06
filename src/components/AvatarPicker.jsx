import React, { useState } from "react";
import { setAvatar } from "../utils/utils";

const DEFAULT_AVATAR_ID = 1;

/**
 *
 *
 *
 */

export default function AvatarPicker({ avatars }) {
  const [activatedAvatar, setActivatedAvatarId] = useState(DEFAULT_AVATAR_ID);

  return <div className="container">AvatarPicker</div>;
}
