export const getCookie = (name: string) => {
  if (typeof window !== "object") return undefined;
  const matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`,
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}`;
};

export const cleanCookie = () => {
  document.cookie = "";
};
