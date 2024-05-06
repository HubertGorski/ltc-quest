import { MODULE_NAME } from "@/models/Module";
import {
  KILL_GAME_INFO_TYPE,
  Notification,
  RECIPIENT,
} from "@/models/Notification";

export const notifications = [
  new Notification(
    1,
    "04.01.2024 16:41",
    MODULE_NAME.KILL_GAME,
    RECIPIENT.ADMIN,
    true,
    {
      killer: "Adam",
      user: "Hubert",
      infoType: KILL_GAME_INFO_TYPE.EXPECTANCY,
    }
  ),
  new Notification(
    2,
    "03.01.2024 11:15",
    MODULE_NAME.KILL_GAME,
    RECIPIENT.ADMIN,
    false,
    {
      killer: "Laura",
      user: "Magda",
      infoType: KILL_GAME_INFO_TYPE.REJECTED,
    }
  ),
];
