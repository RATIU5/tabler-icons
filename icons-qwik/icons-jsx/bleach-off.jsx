import { component$ } from "@builder.io/qwik";

const IconBleachOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bleach-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19h14m1.986 -1.977a2.001 2.001 0 0 0 -.146 -.773l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.815 1.405m-1.488 2.568l-4.797 8.277a2 2 0 0 0 1.75 2.75" /><path d="M3 3l18 18" /></svg>;
});

export default IconBleachOff;