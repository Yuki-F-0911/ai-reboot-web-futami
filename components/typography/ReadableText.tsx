import { Fragment, type ReactNode } from "react";

const BREAKABLE_PUNCTUATION = /^[、。,.!?！？:：;；・･／/｜|]$/;
const TOKEN_PATTERN = /([、。,.!?！？:：;；・･／/｜|])/g;

export function renderReadableJapaneseText(text: string): ReactNode {
  return text.split(TOKEN_PATTERN).map((token, index) => {
    if (!token) {
      return null;
    }

    if (BREAKABLE_PUNCTUATION.test(token)) {
      return (
        <Fragment key={`punctuation-${index}`}>
          {token}
          <wbr />
        </Fragment>
      );
    }

    return <Fragment key={`text-${index}`}>{token}</Fragment>;
  });
}
