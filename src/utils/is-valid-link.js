export function isValidLink(link) {
  try {
    // Try to create a new URL object; if it fails, the link is invalid
    new URL(link);
    return true;
  } catch {
    return false;
  }
}
