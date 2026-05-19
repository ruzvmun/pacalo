/**
 * Get the correct asset path with base URL for deployment
 * @param path - The asset path relative to public directory (should start with /)
 * @returns The full asset path including base URL
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Use Vite's base URL (includes trailing slash if needed)
  const baseUrl = import.meta.env.BASE_URL;

  // Remove leading slash from path if base URL already has trailing slash
  const finalPath = baseUrl.endsWith('/') && normalizedPath.startsWith('/')
    ? normalizedPath.slice(1)
    : normalizedPath;

  return `${baseUrl}${finalPath}`;
}