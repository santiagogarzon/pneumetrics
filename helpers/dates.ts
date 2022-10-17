import { format } from "date-fns";
import { es } from "date-fns/locale";

import { errorHandler } from "./reporting";

export const formatDate = (date: Date, formatStr: string) => {
  try {
    return format(date, formatStr, { locale: es });
  } catch (e: any) {
    errorHandler(new Error("date_error"), e);

    return "";
  }
};
