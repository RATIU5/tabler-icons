import { component$ } from "@builder.io/qwik";

const IconArrowUpTail = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-tail" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={18} x2={12} y2={3} /><path d="M15 6l-3 -3l-3 3" /><path d="M15 21l-3 -3l-3 3" /></svg>;
});

export default IconArrowUpTail;