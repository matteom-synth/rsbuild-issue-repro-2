import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    copy: [
      { from: "*.!(html)", context: "public", to: "." },
    ],
  }
});
