type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};

export function openGraph({
  siteName,
  templateTitle,
  description,
  // !STARTERCONF Or, you can use my server with your own logo.
  logo = "https://og.<your-domain>/images/logo.jpg",
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.<your-domain>/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ""
  }`;
}

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== "undefined") {
    return sessionStorage.getItem(key);
  }
  return null;
}

/**
 * @return {String}
 * @param time
 * @param cFormat
 * @author {HoBinh}
 */
export function parseTime(time: any, cFormat: string) {
  if (arguments.length === 0 || !time) return null;

  const format = cFormat || "{y} {m}/{d} {h}:{i}";
  let date;
  if (typeof time === "object") date = time;
  else {
    if (typeof time === "string" && /^[0-9]+$/.test(time))
      time = parseInt(time) * 1000;

    if (typeof time === "number" && time.toString().length === 10)
      time = time * 1000;

    date = new Date(time.replace(/-/g, "/"));
  }

  if (isNaN(date)) {
    date = new Date(time);
  }

  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };

  return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    // @ts-ignore
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a")
      return [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][value];

    if (result.length > 0 && value < 10) value = "0" + value;

    return value || 0;
  });
}

/**
 * @author {HoBinh}
 * @param {Number} second
 * @return {Number}
 */
export function secondToDay(second: number) {
  return second / (24 * 60 * 1000);
}

/**
 * @author {HoBinh}
 * @param {string} time
 * @param {string} label
 */
export function pluralize(time: number | string, label: string) {
  if (time === 1) {
    return time + label;
  }

  return time + label + "s";
}

/**
 * @author {HoBinh}
 * @param time
 * @param option
 */
export function formatTime(time: any, option: any) {
  time = +time * 1000;
}
