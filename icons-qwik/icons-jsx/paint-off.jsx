import { component$ } from "@builder.io/qwik";

const IconPaintOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paint-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 3h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4m-4 0h-2a2 2 0 0 1 -2 -2v-2" /><path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5m-4 0h-1v2" /><rect x={10} y={15} width={4} height={6} rx={1} /><path d="M3 3l18 18" /></svg>;
});

export default IconPaintOff;