import { component$ } from "@builder.io/qwik";

const IconLogicXnor = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logic-xnor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 12h-2" /><path d="M2 9h4" /><path d="M2 15h4" /><path d="M5 19c1.778 -4.667 1.778 -9.333 0 -14" /><path d="M8 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14z" /><circle cx={18} cy={12} r={2} /></svg>;
});

export default IconLogicXnor;