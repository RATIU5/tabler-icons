import { component$ } from "@builder.io/qwik";

const IconBrandChrome = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-chrome" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><circle cx={12} cy={12} r={3} /><path d="M12 9h8.4" /><path d="M14.598 13.5l-4.2 7.275" /><path d="M9.402 13.5l-4.2 -7.275" /></svg>;
});

export default IconBrandChrome;