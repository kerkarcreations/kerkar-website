import { useState, useEffect } from 'react';
import type { Logo, LogoPosition } from '../utils/logoLoader';
import { generateLogoPositions } from '../utils/logoLoader';

export const useLogos = () => {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [positions, setPositions] = useState<LogoPosition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAvailableLogos = async () => {
      const availableLogos: Logo[] = [];
      
      // Check for numbered logo files (1.png, 2.jpg, etc.)
      for (let i = 1; i <= 20; i++) {
        const extensions = ['png', 'jpg', 'jpeg', 'svg', 'webp'];
        
        for (const ext of extensions) {
          const logoPath = `/logos/${i}.${ext}`;
          
          try {
            // Test if the image exists by trying to load it
            const img = new Image();
            await new Promise<void>((resolve, reject) => {
              img.onload = () => resolve();
              img.onerror = () => reject();
              img.src = logoPath;
            });
            
            // If we reach here, the image loaded successfully
            availableLogos.push({
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
      
      // Generate positions for the available logos
      const logoPositions = generateLogoPositions(availableLogos.length);
      
      setLogos(availableLogos);
      setPositions(logoPositions);
      setLoading(false);
    };

    loadAvailableLogos();
  }, []);

  return { logos, positions, loading };
};
