import { component$ } from "@builder.io/qwik";

const IconLetterR = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-r" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" /><line x1={12} y1={13} x2={17} y2={20} /></svg>;
});

export default IconLetterR;