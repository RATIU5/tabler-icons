import { component$ } from "@builder.io/qwik";

const IconBedOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bed-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7v11" /><path d="M3 14h11" /><path d="M18 14h3" /><path d="M21 18v-8a2 2 0 0 0 -2 -2h-7" /><path d="M11 11v3" /><circle cx={7} cy={10} r={1} /><path d="M3 3l18 18" /></svg>;
});

export default IconBedOff;