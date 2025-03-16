import { Typography } from "@progress/kendo-react-common";
import { Tooltip } from "@progress/kendo-react-tooltip";
import { FluentEmoji } from "@lobehub/fluent-emoji";
import { StackLayout } from "@progress/kendo-react-layout";
import "../styles/mood-selector.scss";
import { EMOJIS_MAP, useMoodStore } from "../store/use-mood-store";
import { useCalendarStore } from "../store/use-calendar-store";

export const MoodSelector = () => {
  const activeDate = useCalendarStore((state) => state.activeDate);
  const { moodsMap, addMood } = useMoodStore((state) => state);

  return (
    <StackLayout
      align={{ vertical: "middle" }}
      gap={32}
      style={{ paddingBottom: 24 }}
    >
      <Typography.h6 style={{ marginBottom: 0 }}>
        How are you feeling today?
      </Typography.h6>
      <StackLayout gap={12}>
        {EMOJIS_MAP.map(({ emoji, label, id }, i) => (
          <Tooltip
            anchorElement={"target" + i}
            position="top"
            openDelay={0}
            key={id}
          >
            <button
              title={label}
              className={
                "emoji-container " +
                (moodsMap[activeDate] === id ? "active" : "")
              }
              onClick={() => addMood(activeDate, id)}
            >
              <FluentEmoji emoji={emoji} type="3d" size={44} />
            </button>
          </Tooltip>
        ))}
      </StackLayout>
    </StackLayout>
  );
};
