import { component$ } from "@builder.io/qwik";

const IconChartGridDots = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-grid-dots" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={18} cy={6} r={2} /><circle cx={6} cy={12} r={2} /><circle cx={6} cy={18} r={2} /><circle cx={18} cy={18} r={2} /><path d="M8 18h8" /><path d="M18 20v1" /><path d="M18 3v1" /><path d="M6 20v1" /><path d="M6 10v-7" /><path d="M12 3v18" /><path d="M18 8v8" /><path d="M8 12h13" /><path d="M21 6h-1" /><path d="M16 6h-13" /><path d="M3 12h1" /><path d="M20 18h1" /><path d="M3 18h1" /><path d="M6 14v2" /></svg>;
});

export default IconChartGridDots;