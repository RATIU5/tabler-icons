import { component$ } from "@builder.io/qwik";

const IconCircuitDiodeZener = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circuit-diode-zener" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 12h-6" /><path d="M2 12h6" /><path d="M8 7l8 5l-8 5z" /><path d="M14 7h2v10h2" /></svg>;
});

export default IconCircuitDiodeZener;