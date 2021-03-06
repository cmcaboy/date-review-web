import moment from "moment";

export const DATE_FORMAT = "MMM D YYYY, h:mm a";
export const DAY_FORMAT = "MMM D";

export const formatDate = (date: string) => moment(date).format(DATE_FORMAT);
