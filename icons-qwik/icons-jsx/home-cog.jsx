import { component$ } from "@builder.io/qwik";

const IconHomeCog = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-cog" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 21v-6a2 2 0 0 1 2 -2h1.6" /><path d="M20.001 11.001l-8.001 -8.001l-9 9h2v7a2 2 0 0 0 2 2h4.159" /><circle cx={18.001} cy={18} r={2} /><path d="M18.001 14.5v1.5" /><path d="M18.001 20v1.5" /><path d="M21.032 16.25l-1.299 .75" /><path d="M16.27 19l-1.3 .75" /><path d="M14.97 16.25l1.3 .75" /><path d="M19.733 19l1.3 .75" /></svg>;
});

export default IconHomeCog;