import { component$ } from "@builder.io/qwik";

const IconStairsDown = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stairs-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 20h4v-4h4v-4h4v-4h4" /><path d="M11 4l-7 7v-4m4 4h-4" /></svg>;
});

export default IconStairsDown;