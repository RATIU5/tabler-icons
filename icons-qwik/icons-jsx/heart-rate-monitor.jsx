import { component$ } from "@builder.io/qwik";

const IconHeartRateMonitor = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart-rate-monitor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={4} width={18} height={12} rx={1} /><path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" /><path d="M7 10h2l2 3l2 -6l1 3h3" /></svg>;
});

export default IconHeartRateMonitor;