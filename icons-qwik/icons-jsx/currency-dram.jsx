import { component$ } from "@builder.io/qwik";

const IconCurrencyDram = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dram" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 10a6 6 0 1 1 12 0v10" /><path d="M12 16h8" /><path d="M12 12h8" /></svg>;
});

export default IconCurrencyDram;