import { component$ } from "@builder.io/qwik";

const IconXboxB = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-xbox-b" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" /><path d="M13 12a2 2 0 1 1 0 4h-3v-4" /><path d="M13 12h-3" /><path d="M13 12a2 2 0 1 0 0 -4h-3v4" /></svg>;
});

export default IconXboxB;