//Functions to open or handle External Links
export const openMediaLinks = (_event: React.MouseEvent, url: string): void => {
    window.open(url, "_blank", 'noopener,noreferrer');
  };