import React from "react";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import "./EmojiPicker.css";

type EmojiPickerProps = {
  onChoose: Function;
};

const EmojiPicker = ({ onChoose }: EmojiPickerProps) => {
  const onSelect = (emoji: any) => {
    onChoose(emoji.native);
  };

  return (
    <div className="EmojiPicker">
      <Picker onSelect={onSelect} emojiSize={30} />
    </div>
  );
};

export default EmojiPicker;
