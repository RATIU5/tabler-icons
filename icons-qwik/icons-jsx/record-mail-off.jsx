import { component$ } from "@builder.io/qwik";

const IconRecordMailOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-record-mail-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={7} cy={12} r={3} /><path d="M18.569 14.557a3 3 0 1 0 -4.113 -4.149" /><path d="M7 15h8" /><path d="M3 3l18 18" /></svg>;
});

export default IconRecordMailOff;