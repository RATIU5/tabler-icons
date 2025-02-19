import { component$ } from "@builder.io/qwik";

const IconChartTreemap = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-treemap" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={2} /><path d="M12 4v16" /><path d="M4 15h8" /><path d="M12 12h8" /><path d="M16 12v8" /><path d="M16 16h4" /></svg>;
});

export default IconChartTreemap;