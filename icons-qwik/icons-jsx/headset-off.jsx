import { component$ } from "@builder.io/qwik";

const IconHeadsetOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-headset-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={13} width={4} height={6} rx={2} /><path d="M17.185 13.173a2 2 0 0 1 2.815 1.827v1m-1.18 2.825a2 2 0 0 1 -2.82 -1.825v-1" /><path d="M4 15v-3c0 -2.208 .894 -4.207 2.34 -5.654m2.377 -1.643a8 8 0 0 1 11.283 7.297v3" /><path d="M18 19c0 1.657 -2.686 3 -6 3" /><path d="M3 3l18 18" /></svg>;
});

export default IconHeadsetOff;