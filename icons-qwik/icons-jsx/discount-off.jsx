import { component$ } from "@builder.io/qwik";

const IconDiscountOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15l3 -3m2 -2l1 -1" /><path d="M9.148 9.145a0.498 .498 0 0 0 .352 .855a0.5 .5 0 0 0 .35 -.142" /><path d="M14.148 14.145a0.498 .498 0 0 0 .352 .855a0.5 .5 0 0 0 .35 -.142" /><path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" /><path d="M3 3l18 18" /></svg>;
});

export default IconDiscountOff;