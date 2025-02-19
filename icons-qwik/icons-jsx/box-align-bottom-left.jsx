import { component$ } from "@builder.io/qwik";

const IconBoxAlignBottomLeft = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-align-bottom-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 13h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1z" /><path d="M4 9v.01" /><path d="M4 4v.01" /><path d="M9 4v.01" /><path d="M15 4v.01" /><path d="M15 20v.01" /><path d="M20 4v.01" /><path d="M20 9v.01" /><path d="M20 15v.01" /><path d="M20 20v.01" /></svg>;
});

export default IconBoxAlignBottomLeft;