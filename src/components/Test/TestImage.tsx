interface TestImageProps {
  width: number;
  height: number;
  angle: number;
  spacing: number;
  points: number;
}

export const TestImage = (props: TestImageProps) => {
  const paths: JSX.Element[] = [];

  const createLines = () => {
    const createMidpoint = (
      from: [number, number],
      to: [number, number]
    ): [number, number] => {
      return [
        from[0] + ((to[0] - from[0]) / 2) * (Math.random() * 0.3),
        from[1] + ((to[1] - from[1]) / 2) * (Math.random() * 0.3),
      ];
    };

    const createPathString = (
      positions: [number, number][],
      midpoints: [number, number][]
    ) => {
      console.log(positions, midpoints);

      const pieces = [`M ${positions[0][0]} ${positions[0][1]}`];
      midpoints.forEach((midpoint, i) => {
        const position = positions[i + 1];
        pieces.push(
          `Q ${midpoint[0]} ${midpoint[1]} ${position[0]} ${position[1]}`
        );
      });
      return pieces.join(" ");
    };

    const loopTimes = Math.ceil(
      (props.height + Math.sin(props.angle) * props.width) / props.spacing
    );
    for (let i = 0; i < loopTimes; i++) {
      const to: [number, number] = [
        props.width,
        props.height - i * props.spacing,
      ];
      const from: [number, number] = [
        0,
        Math.sin(props.angle) * props.width + props.height - i * props.spacing,
      ];

      const positions: [number, number][] = [
        from,
        ...(new Array(props.points)).map((_, i) => {
          return [
            from[0] +
              ((to[0] - from[0]) / props.points) * i * (Math.random() * 0.3),
            from[1] +
              ((to[1] - from[1]) / props.points) * i * (Math.random() * 0.3),
          ] as [number, number];
        }),
        to,
      ];

      const midpoints = new Array(props.points + 1).map((_, i) => {
        return createMidpoint(positions[i], positions[i + 1]);
      });

      const stringPath = createPathString(positions, midpoints);

      paths.push(<path d={stringPath} stroke="#FFF" strokeWidth={6} key={i} />);
    }

    return paths;
  };

  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={`0 0 ${props.width} ${props.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="test"
    >
      {createLines()}
    </svg>
  );
};
