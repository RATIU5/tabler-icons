import { component$ } from "@builder.io/qwik";

const IconVirus = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-virus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={5} /><path d="M12 7v-4" /><path d="M11 3h2" /><path d="M15.536 8.464l2.828 -2.828" /><path d="M17.657 4.929l1.414 1.414" /><path d="M17 12h4" /><path d="M21 11v2" /><path d="M15.535 15.536l2.829 2.828" /><path d="M19.071 17.657l-1.414 1.414" /><path d="M12 17v4" /><path d="M13 21h-2" /><path d="M8.465 15.536l-2.829 2.828" /><path d="M6.343 19.071l-1.413 -1.414" /><path d="M7 12h-4" /><path d="M3 13v-2" /><path d="M8.464 8.464l-2.828 -2.828" /><path d="M4.929 6.343l1.414 -1.413" /></svg>;
});

export default IconVirus;