import { component$ } from "@builder.io/qwik";

const IconFirstAidKitOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-first-aid-kit-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.595 4.577a1.994 1.994 0 0 1 1.405 -.577h4a2 2 0 0 1 2 2v2" /><path d="M12 8h6a2 2 0 0 1 2 2v6m-.576 3.405a1.994 1.994 0 0 1 -1.424 .595h-12a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" /><path d="M10 14h4" /><path d="M12 12v4" /><path d="M3 3l18 18" /></svg>;
});

export default IconFirstAidKitOff;