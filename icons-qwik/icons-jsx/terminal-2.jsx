import { component$ } from "@builder.io/qwik";

const IconTerminal2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-terminal-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9l3 3l-3 3" /><line x1={13} y1={15} x2={16} y2={15} /><rect x={3} y={4} width={18} height={16} rx={2} /></svg>;
});

export default IconTerminal2;