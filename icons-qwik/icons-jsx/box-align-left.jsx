import { component$ } from "@builder.io/qwik";

const IconBoxAlignLeft = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-align-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.752 19.753v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z" /><path d="M14.752 19.753h-.01" /><path d="M19.753 19.753h-.011" /><path d="M19.753 14.752h-.011" /><path d="M19.753 8.752h-.011" /><path d="M19.753 3.752h-.011" /><path d="M14.752 3.752h-.01" /></svg>;
});

export default IconBoxAlignLeft;