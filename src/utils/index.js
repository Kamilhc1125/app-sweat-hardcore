export const handleLink = (url) => window.open(url, '_blank');

export const trimTitle = (title) => title.replace(/\s*\(.*?\)\s*/g, "").trim();