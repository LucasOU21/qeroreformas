import type { APIRoute } from "astro";
import sharp from "sharp";
import ico from "sharp-ico";
import path from "node:path";
import fs from "node:fs/promises";

// First, copy the icon file to the public directory
const sourceIconPath = path.resolve("src/pages/Kaliaicon256x256.ico");
const publicIconPath = path.resolve("public/favicon.ico");

// This function is called when the favicon.ico route is accessed
export const GET: APIRoute = async () => {
  try {
    // Try to read the icon file directly
    const icoBuffer = await fs.readFile(sourceIconPath);
    
    // Also copy it to the public directory for direct access
    await fs.writeFile(publicIconPath, icoBuffer);
    
    return new Response(icoBuffer, {
      headers: { "Content-Type": "image/x-icon" },
    });
  } catch (error) {
    console.error("Error loading favicon:", error);
    
    // Fallback to generating a new icon
    const sizes = [16, 32];
    const svgFallbackPath = path.resolve("src/images/logo.svg");
    
    const buffers = await Promise.all(
      sizes.map(async (size) => {
        return await sharp(svgFallbackPath)
          .resize(size)
          .toFormat("png")
          .toBuffer();
      })
    );

    // Convert the image to an ICO file
    const fallbackIcoBuffer = ico.encode(buffers);

    return new Response(fallbackIcoBuffer, {
      headers: { "Content-Type": "image/x-icon" },
    });
  }
};