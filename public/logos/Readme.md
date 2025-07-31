# Technology Logos

This folder contains the technology logos that will be displayed as floating elements in the "What We Do" section.

## How to Add Logos

1. **Naming Convention**: Name your logo files using numbers: `1.png`, `2.jpg`, `3.svg`, etc.
2. **Supported Formats**: PNG, JPG, JPEG, SVG, WEBP
3. **Recommended Size**: 512x512px or similar square dimensions for best results
4. **Auto-Detection**: The system automatically detects and loads logos numbered 1-20

## Examples

```
/public/logos/
├── 1.png      (Unity logo)
├── 2.svg      (React logo)  
├── 3.jpg      (Blender logo)
├── 4.png      (Node.js logo)
└── ...
```

## Features

- **Dynamic Loading**: Automatically detects how many logos you've uploaded
- **Random Positioning**: Logos are randomly positioned to avoid overlap
- **Floating Animation**: Each logo has its own floating animation with random delays
- **Error Handling**: Invalid or missing images are automatically hidden
- **Responsive**: Logo sizes adapt to different screen sizes

## Tips

- Use high-quality, square logos for best visual results
- Transparent backgrounds (PNG/SVG) work best
- The system checks for files in order (1, 2, 3...) so number them sequentially
- Maximum 20 logos supported (you can increase this in the code if needed)
