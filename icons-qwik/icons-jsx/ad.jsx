import { component$ } from "@builder.io/qwik";

const IconAd = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ad" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={5} width={18} height={14} rx={2} /><path d="M7 15v-4a2 2 0 0 1 4 0v4" /><line x1={7} y1={13} x2={11} y2={13} /><path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" /></svg>;
});

export default IconAd;