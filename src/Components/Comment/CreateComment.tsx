import { Emoji } from "emoji-mart";
import React, { useState } from "react";
import "./CreateComment.css";
import EmojiPicker from "./EmojiPicker";
import ShowEmojiButton from "./ShowEmojiButton";

const CreateComment = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [comment, setComment] = useState("");

  const showEmojiButtonOnClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    setShowEmojiPicker(!showEmojiPicker);
  };

  const commentInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setComment(e.currentTarget.value);
  };

  const emojiPickerHandler = (chosenEmoji: any): void => {
    setComment(comment + chosenEmoji);
  };

  return (
    <div className="CreateComment">
      <ShowEmojiButton onClick={showEmojiButtonOnClick} />
      {showEmojiPicker ? <EmojiPicker onChoose={emojiPickerHandler} /> : null}
      <input
        type="text"
        className="CommentInput"
        placeholder="댓글 달기..."
        value={comment}
        onChange={commentInputChangeHandler}
      />
      <button className={comment.length > 0 ? "CommentCreateButton--Valid" : "CommentCreateButton"}>
        게시
      </button>
    </div>
  );
};

export default CreateComment;
