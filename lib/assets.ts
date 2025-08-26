/**
 * Helper function to generate asset paths for static export
 */
export function getAssetPath(path: string): string {
  // Always use root-relative paths
  return path.startsWith('/') ? path : `/${path}`
}

/**
 * Helper function for PDF downloads specifically
 */
export function getPdfPath(filename: string): string {
  return getAssetPath(filename)
}

/**
 * Helper function for images with proper Next.js Image component support
 */
export function getImagePath(path: string): string {
  // For Next.js Image component, always use absolute paths starting with /
  return path.startsWith('/') ? path : `/${path}`
}
