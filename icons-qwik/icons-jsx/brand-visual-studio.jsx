import { component$ } from "@builder.io/qwik";

const IconBrandVisualStudio = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-visual-studio" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z" /></svg>;
});

export default IconBrandVisualStudio;