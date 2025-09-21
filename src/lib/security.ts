// Security utilities for the application

/**
 * Safely parse content with URLs and return a React-ready version
 * 
 * This function parses plain text that may contain URLs and returns segments 
 * that can be safely rendered in React, with proper security attributes for links
 * 
 * @param text The input text that may contain URLs
 * @returns Array of segments to render
 */
export function parseTextWithLinks(text: string): { type: 'text' | 'link', content: string, href?: string }[] {
  if (!text) return [];
  
  // Sanitize input text first
  const sanitizedText = sanitizeString(text);
  
  const result: { type: 'text' | 'link', content: string, href?: string }[] = [];
  
  // Regex to find URLs in text
  const urlRegex = /https?:\/\/[^\s]+/g;
  
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  
  // Find all URLs and build segments
  while ((match = urlRegex.exec(sanitizedText)) !== null) {
    // Add text before the URL
    if (match.index > lastIndex) {
      result.push({
        type: 'text',
        content: sanitizedText.substring(lastIndex, match.index)
      });
    }
    
    // Add the URL as a link
    const url = match[0];
    const sanitizedUrl = sanitizeUrl(url);
    if (sanitizedUrl) {
      // If URL ends with punctuation, remove it from the URL
      const urlEndPunct = sanitizedUrl.match(/[.,;:!?)]$/);
      let cleanUrl = sanitizedUrl;
      let punctuation = '';
      
      if (urlEndPunct) {
        punctuation = urlEndPunct[0];
        cleanUrl = sanitizedUrl.substring(0, sanitizedUrl.length - 1);
      }
      
      result.push({
        type: 'link',
        content: cleanUrl,
        href: cleanUrl
      });
      
      if (punctuation) {
        result.push({
          type: 'text',
          content: punctuation
        });
      }
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add any remaining text after the last URL
  if (lastIndex < sanitizedText.length) {
    result.push({
      type: 'text',
      content: sanitizedText.substring(lastIndex)
    });
  }
  
  return result;
}

/**
 * Sanitize a string to prevent XSS attacks
 * 
 * @param input The input string to sanitize
 * @returns A sanitized string
 */
export function sanitizeString(input: string): string {
  if (!input) return '';
  
  // Replace potentially dangerous characters
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitize a URL to ensure it's safe
 * 
 * @param url The URL to sanitize
 * @returns A sanitized URL or empty string if unsafe
 */
export function sanitizeUrl(url: string): string {
  if (!url) return '';
  
  // Check for JavaScript protocol which can be used for XSS
  const sanitizedUrl = url.trim().toLowerCase();
  if (sanitizedUrl.startsWith('javascript:') || 
      sanitizedUrl.startsWith('data:') || 
      sanitizedUrl.startsWith('vbscript:')) {
    return '';
  }
  
  // Only allow http: and https: protocols
  if (!sanitizedUrl.startsWith('http://') && !sanitizedUrl.startsWith('https://')) {
    return '';
  }
  
  return url;
}

/**
 * Validate and sanitize email addresses
 * 
 * @param email The email address to validate and sanitize
 * @returns The sanitized email or empty string if invalid
 */
export function sanitizeEmail(email: string): string {
  if (!email) return '';
  
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return '';
  }
  
  return sanitizeString(email);
}

/**
 * Sanitize phone numbers to ensure they only contain valid characters
 * 
 * @param phone The phone number to sanitize
 * @returns The sanitized phone number
 */
export function sanitizePhone(phone: string): string {
  if (!phone) return '';
  
  // Remove anything that's not a digit, +, -, or space
  return phone.replace(/[^\d\+\-\s]/g, '');
}