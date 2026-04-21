export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/svg+xml";

export default function Icon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size.width}" height="${size.height}" viewBox="0 0 ${size.width} ${size.height}">
      <rect width="${size.width}" height="${size.height}" rx="6" fill="#18181b" />
      <text
        x="50%"
        y="56%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="#ffffff"
        font-size="18"
        font-family="Outfit, Arial, sans-serif"
        font-weight="700"
      >
        SV
      </text>
    </svg>
  `.trim();

  return new Response(svg, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
