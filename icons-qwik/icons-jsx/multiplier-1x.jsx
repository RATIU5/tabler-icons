import { component$ } from "@builder.io/qwik";

const IconMultiplier1x = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-multiplier-1x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 16v-8l-2 2" /><path d="M13 16l4 -4" /><path d="M17 16l-4 -4" /></svg>;
});

export default IconMultiplier1x;