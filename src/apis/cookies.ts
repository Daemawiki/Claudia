export const getCookie = (name: string): string | undefined => {
  if (typeof window !== "object") {
    return undefined;
  }

  const escapedName = name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1");
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${escapedName}=([^;]*)`),
  );

  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name: string, value: string): void => {
  document.cookie = `${name}=${value}`;
};

export const cleanCookie = (): void => {
  document.cookie = "";
};
