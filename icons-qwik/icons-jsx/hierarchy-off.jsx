import { component$ } from "@builder.io/qwik";

const IconHierarchyOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hierarchy-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={5} r={2} /><circle cx={5} cy={19} r={2} /><path d="M17.585 17.587a2 2 0 0 0 2.813 2.843" /><path d="M6.5 17.5l5.5 -4.5l5.5 4.5" /><path d="M12 7v1m0 4v1" /><path d="M3 3l18 18" /></svg>;
});

export default IconHierarchyOff;