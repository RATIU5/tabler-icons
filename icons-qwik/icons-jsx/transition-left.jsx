import { component$ } from "@builder.io/qwik";

const IconTransitionLeft = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-transition-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3" /><path d="M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0z" /><path d="M15 12h-8" /><path d="M10 9l-3 3l3 3" /></svg>;
});

export default IconTransitionLeft;