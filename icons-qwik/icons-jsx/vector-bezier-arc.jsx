import { component$ } from "@builder.io/qwik";

const IconVectorBezierArc = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-bezier-arc" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={10} width={4} height={4} rx={1} /><rect x={17} y={10} width={4} height={4} rx={1} /><rect x={10} y={3} width={4} height={4} rx={1} /><rect x={10} y={17} width={4} height={4} rx={1} /><path d="M19 10a5 5 0 0 0 -5 -5" /><path d="M5 14a5 5 0 0 0 5 5" /><path d="M5 10a5 5 0 0 1 5 -5" /></svg>;
});

export default IconVectorBezierArc;