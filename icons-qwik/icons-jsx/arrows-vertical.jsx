import { component$ } from "@builder.io/qwik";

const IconArrowsVertical = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="8 7 12 3 16 7" /><polyline points="8 17 12 21 16 17" /><line x1={12} y1={3} x2={12} y2={21} /></svg>;
});

export default IconArrowsVertical;