import { component$ } from "@builder.io/qwik";

const IconBrandVsco = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-vsco" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={10} /><circle cx={12} cy={12} r={7} /><circle cx={12} cy={12} r={4} /><path d="M12 2v3" /><path d="M12 19v3" /><path d="M19 12h3" /><path d="M2 12h3" /><path d="M17 3.34l-1.5 2.598" /><path d="M8.5 18.062l-1.5 2.598" /><path d="M18.062 15.5l2.598 1.5" /><path d="M3.34 7l2.598 1.5" /><path d="M7 3.34l1.5 2.598" /><path d="M15.5 18.062l1.5 2.598" /><path d="M18.062 8.5l2.598 -1.5" /><path d="M3.34 17l2.598 -1.5" /><path d="M12 5v3" /><path d="M12 16v3" /><path d="M5 12h3" /><path d="M16 12h3" /><path d="M16.95 7.05l-2.122 2.122" /><path d="M9.172 14.828l-2.122 2.122" /><path d="M7.05 7.05l2.122 2.122" /><path d="M14.828 14.828l2.122 2.122" /></svg>;
});

export default IconBrandVsco;