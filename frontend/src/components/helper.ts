export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const COOKIE_SECRET = process.env.NEXT_PUBLIC_COOKIE_SECRET;
export const JWT_ACCESS_SECRET = process.env.NEXT_PUBLIC_JWT_ACCESS_SECRET;

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
