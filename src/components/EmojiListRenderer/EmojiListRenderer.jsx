import React, { Fragment, memo, forwardRef } from "react";
import PropTypes from "prop-types";
import Box from "../Box/Box";
import Stack from "../Stack/Stack";

const EmojiListRenderer = forwardRef(
  (
    { rounded = true, outlined = false, elevation = 1, list, emojiType, customEmoji, width = "auto", height = "auto" },
    ref
  ) => {
    const emojiList = {
      tick: "✅",
      cross: "❌",
      star: "⭐",
      heart: "❤️",
      fire: "🔥",
      thumbsUp: "👍",
      thumbsDown: "👎",
      clap: "👏",
      wave: "👋",
      eyes: "👀",
      question: "❓",
      exclamation: "❗",
      plus: "➕",
      minus: "➖",
      magnifyingGlass: "🔍",
      lock: "🔒",
      unlock: "🔓",
      key: "🔑",
      bell: "🔔",
      mute: "🔇",
      loudspeaker: "📢",
      mailbox: "📫",
      envelope: "✉️",
      pencil: "✏️",
      paperclip: "📎",
      calendar: "📅",
      chart: "📈",
      book: "📖",
      folder: "📁",
      trash: "🗑️",
      gear: "⚙️",
    };

    const emoji = emojiList[emojiType] || customEmoji;

    return (
      <Box ref={ref} elevation={elevation} width={width} height={height} rounded={rounded} outlined={outlined}>
        {list.map(({ id, content }) => (
          <Fragment key={id}>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              alignContent="flex-start"
              spacing={3}
            >
              <Stack.Item>
                <span role="img">{emoji}</span> <span>{content}</span>
              </Stack.Item>
            </Stack>
          </Fragment>
        ))}
      </Box>
    );
  }
);

EmojiListRenderer.propTypes = {
  elevation: PropTypes.number,
  emojiType: PropTypes.any,
  customEmoji: PropTypes.any,
  list: PropTypes.array.isRequired,
  rounded: PropTypes.bool,
  outlined: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};
EmojiListRenderer.displayName = "EmojiListRenderer";
export default memo(EmojiListRenderer);
