import { component$ } from "@builder.io/qwik";

const IconPointOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-point-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.15 9.194a4 4 0 0 0 5.697 5.617m1.153 -2.811a4 4 0 0 0 -4 -4" /><path d="M3 3l18 18" /></svg>;
});

export default IconPointOff;