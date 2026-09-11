/**
 * Resolves static asset paths with Vite's BASE_URL.
 * Supports root-based dev ('/') and subpath deployments on GitHub Pages ('/portfolio/').
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  // If already absolute URL or data URI, return as-is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const prefix = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${prefix}${cleanPath}`;
};
