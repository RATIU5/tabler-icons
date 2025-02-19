import { component$ } from "@builder.io/qwik";

const IconPackages = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-packages" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={2} y={13} width={8} height={8} rx={2} /><path d="M6 13v3" /><rect x={8} y={3} width={8} height={8} rx={2} /><path d="M12 3v3" /><rect x={14} y={13} width={8} height={8} rx={2} /><path d="M18 13v3" /></svg>;
});

export default IconPackages;