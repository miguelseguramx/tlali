import React from "react";

type Props = {};

export default function JetStar({}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="172.857"
      height="110"
      viewBox="0 0 172.857 110"
    >
      <defs>
        <pattern
          id="jetstar"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
          viewBox="0 0 275 175"
        >
          <image
            width="275"
            height="175"
            href="data:image/png;base64,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"
          />
        </pattern>
      </defs>
      <rect
        id="image_28"
        data-name="image 28"
        width="172.857"
        height="110"
        fill="url(#jetstar)"
        style={{ mixBlendMode: "luminosity", isolation: "isolate" }}
      />
    </svg>
  );
}