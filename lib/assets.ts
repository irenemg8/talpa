/**
 * Helper function to generate asset paths for GitHub Pages
 * This ensures assets work both in development and production (GitHub Pages)
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // In production (GitHub Pages), prepend the base path
  if (process.env.NODE_ENV === 'production') {
    return `/talpa/${cleanPath}`
  }
  
  // In development, use the path as is
  return `/${cleanPath}`
}

/**
 * Helper function for PDF downloads specifically
 */
export function getPdfPath(filename: string): string {
  return getAssetPath(filename)
}
