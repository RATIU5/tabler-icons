import { component$ } from "@builder.io/qwik";

const IconBrandGravatar = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-gravatar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.64 5.632a9 9 0 1 0 6.36 -2.632v7.714" /></svg>;
});

export default IconBrandGravatar;