import { component$ } from "@builder.io/qwik";

const IconArrowRoundaboutRight = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-roundabout-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 9h-8a5 5 0 1 0 -5 5v7" /><path d="M17 5l4 4l-4 4" /></svg>;
});

export default IconArrowRoundaboutRight;