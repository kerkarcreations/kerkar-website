// Utility to dynamically load logos from the public/logos folder
export interface Logo {
  id: number;
  src: string;
  alt: string;
}

export interface LogoPosition {
  top: number;
  left: number;
  animationDelay: number;
}

export const loadLogos = (): Logo[] => {
  const logos: Logo[] = [];
  
  // We'll check for numbered logo files (1.png, 2.jpg, etc.)
  // This approach works with Vite's static asset handling
  for (let i = 1; i <= 20; i++) { // Check up to 20 logos
    const extensions = ['png', 'jpg', 'jpeg', 'svg', 'webp'];
    
    for (const ext of extensions) {
      try {
        const logoPath = `/logos/${i}.${ext}`;
        // We'll add the logo to our array - React will handle missing images gracefully
        logos.push({
          id: i,
          src: logoPath,
          alt: `Technology Logo ${i}`
        });
        break; // Found a logo with this number, move to next number
      } catch {
        // Continue checking other extensions
        continue;
      }
    }
  }
  
  return logos;
};

// Generate random positions for logos
export const generateLogoPositions = (count: number): LogoPosition[] => {
  const positions: LogoPosition[] = [];
  const usedPositions: string[] = [];
  
  for (let i = 0; i < count; i++) {
    let position: LogoPosition;
    let attempts = 0;
    
    do {
      position = {
        top: Math.random() * 80 + 10, // 10% to 90%
        left: Math.random() * 80 + 10, // 10% to 90%
        animationDelay: Math.random() * 6, // 0 to 6 seconds
      };
      attempts++;
    } while (attempts < 50 && isPositionTooClose(position, usedPositions));
    
    usedPositions.push(`${Math.round(position.top)}-${Math.round(position.left)}`);
    positions.push(position);
  }
  
  return positions;
};

const isPositionTooClose = (newPos: LogoPosition, existingPositions: string[]): boolean => {
  return existingPositions.some(pos => {
    const [existingTop, existingLeft] = pos.split('-').map(Number);
    const distance = Math.sqrt(
      Math.pow(newPos.top - existingTop, 2) + Math.pow(newPos.left - existingLeft, 2)
    );
    return distance < 15; // Minimum 15% distance between logos
  });
};
