import { component$ } from "@builder.io/qwik";

const IconMoodSing = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-sing" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M9 9h.01" /><path d="M15 9h.01" /><circle cx={15} cy={15} r={2} /></svg>;
});

export default IconMoodSing;