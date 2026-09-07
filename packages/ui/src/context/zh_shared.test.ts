import { describe, expect, test } from "bun:test"

import { dict as zh } from "/workspaces/opencode/packages/ui/src/i18n/zh.ts"
import { dict as zht } from "/workspaces/opencode/packages/ui/src/i18n/zht.ts"

describe("Chinese translations", () => {
  test.each([
    ["zh", zh, "ui.sessionReview.title", "会话变更"],
    ["zht", zht, "ui.sessionReview.title", "工作階段變更"],

    ["zh", zh, "ui.common.add", "添加"],
    ["zht", zht, "ui.common.add", "新增"],

    ["zh", zh, "ui.promptInput.send", "发送"],
    ["zht", zht, "ui.promptInput.send", "傳送"],

    ["zh", zh, "ui.message.copy", "复制"],
    ["zht", zht, "ui.message.copy", "複製"],
  ] as const)(
    "%s translated correctly",
    (_locale, dict, key, expected) => {
      expect(dict[key]).toBe(expected)
    },
  )
})