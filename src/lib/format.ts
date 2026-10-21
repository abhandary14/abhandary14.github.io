const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escapes text and turns **bold** markers into <strong> tags. */
export const emphasize = (text: string) =>
  escapeHtml(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
