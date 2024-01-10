class SVGParser {
  private lastX = 0;
  private lastY = 0;
  private commandCount: { [key: string]: number } = {};

  public parse(svgString: string) {
    const parser = new DOMParser();
    const svgDocument = parser.parseFromString(svgString, 'image/svg+xml');
    const pathElements = svgDocument.querySelectorAll('path');
    if (!pathElements || pathElements.length === 0) return [];
    return Array.from(pathElements);
  }
}

export function parseSVG(svgString: string) {
  const parser = new SVGParser();
  return parser.parse(svgString);
}
