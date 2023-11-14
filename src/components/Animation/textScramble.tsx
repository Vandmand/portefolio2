import {UseScrambleProps, useScramble} from 'use-scramble'

interface TextScrambleProps extends UseScrambleProps {
  children: string;
}
export const TextScramble = (props: TextScrambleProps) => {
  
  const {ref} = useScramble({
    speed: 0.7,
    scramble: 10,
    range: [0x0021, 0x0040],
    ...props,
    text: props.children
  })

  return <p ref={ref} />;
};
