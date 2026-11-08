function CircleShape({ size = 24, color = "#D97706", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12} cy={12} r={12} fill={color} />
    </svg>
  );
}

export default CircleShape;
