export function getMeetPlatform(link) {
  const platforms = {
    "zoom.us": "Zoom",
    "meet.google.com": "Google Meet",
    "teams.microsoft.com": "Microsoft Teams",
    "webex.com": "Cisco Webex",
    "bluejeans.com": "BlueJeans",
    "gotomeeting.com": "GoToMeeting",
  };

  for (const domain in platforms) {
    if (link.includes(domain)) {
      return platforms[domain];
    }
  }
  return "Unknown Platform";
}
