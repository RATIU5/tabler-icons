import { component$ } from "@builder.io/qwik";

const IconPennant = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pennant" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={8} y1={21} x2={12} y2={21} /><line x1={10} y1={21} x2={10} y2={3} /><path d="M10 4l9 4l-9 4" /></svg>;
});

export default IconPennant;