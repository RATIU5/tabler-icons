import { component$ } from "@builder.io/qwik";

const IconCornerLeftUp = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-left-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 18h-6a3 3 0 0 1 -3 -3v-10l-4 4m8 0l-4 -4" /></svg>;
});

export default IconCornerLeftUp;