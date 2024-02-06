import vsharp from 'vite-plugin-vsharp';

export default {
  plugins: [
    vsharp({
      includePublic: [],
      excludePublic: [],
      exclude: [],
      '.jpg': {
        quality: 80,
      },
      '.jpeg': {
        quality: 80,
      },
      '.png': {
        quality: 80,
        palette: true,
      },
      '.webp': {
        lossless: true,
      },
      preserveMetadata: {
        orientation: false,
      },
    }),
  ],
};
