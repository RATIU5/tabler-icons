import { component$ } from "@builder.io/qwik";

const IconSquareToggleHorizontal = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-toggle-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 12h-20" /><path d="M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" /><path d="M18 20a2 2 0 0 0 2 -2" /><path d="M4 18a2 2 0 0 0 2 2" /><line x1={14} y1={20} x2={10} y2={20} /></svg>;
});

export default IconSquareToggleHorizontal;