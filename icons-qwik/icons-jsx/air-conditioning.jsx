import { component$ } from "@builder.io/qwik";

const IconAirConditioning = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-air-conditioning" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 16a3 3 0 0 1 -3 3" /><path d="M16 16a3 3 0 0 0 3 3" /><path d="M12 16v4" /><rect x={3} y={5} width={18} height={8} rx={2} /><path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" /></svg>;
});

export default IconAirConditioning;