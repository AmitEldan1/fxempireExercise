export const generateRandomString = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length: Math.floor(Math.random() * 3) + 1 })
        .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
        .join('');
}

export const checkSearchedMainDetails = (typingText: string) => new RegExp(`${typingText}|no matching instruments`, 'i');


export const FormattedDate = (date: string) =>
new Date(date).toLocaleString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZoneName: 'short'
  }).replace(',', '')+ 'GMT+00:00';
