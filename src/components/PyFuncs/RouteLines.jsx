function RouteLines({ points }) {
  if (!points || points.length < 2) return null;

  const path = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg className="map__route">
      <polyline
        points={path}
        fill="none"
        stroke="#00f5d4"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default RouteLines;
