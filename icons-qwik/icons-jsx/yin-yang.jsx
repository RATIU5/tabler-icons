import { component$ } from "@builder.io/qwik";

const IconYinYang = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-yin-yang" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9" /><circle cx={12} cy={7.5} r={0.5} fill="currentColor" /><circle cx={12} cy={16.5} r={0.5} fill="currentColor" /></svg>;
});

export default IconYinYang;