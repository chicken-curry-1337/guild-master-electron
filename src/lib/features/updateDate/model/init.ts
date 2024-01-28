import { $days, nextDay, setDay, previousDay } from "@lib/entities/date/model";

$days
  .on(nextDay, (state) => state + 1)
  .on(previousDay, (state) => state - 1)
  .on(setDay, (_, day) => day);
