import { component$ } from "@builder.io/qwik";

const IconPlayerPause = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-pause" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={6} y={5} width={4} height={14} rx={1} /><rect x={14} y={5} width={4} height={14} rx={1} /></svg>;
});

export default IconPlayerPause;