import { component$ } from "@builder.io/qwik";

const IconBrandGraphql = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-graphql" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.308 7.265l5.385 -3.029" /><path d="M13.308 4.235l5.384 3.03" /><path d="M20 9.5v5" /><path d="M18.693 16.736l-5.385 3.029" /><path d="M10.692 19.765l-5.384 -3.03" /><path d="M4 14.5v-5" /><path d="M12.772 4.786l6.121 10.202" /><path d="M18.5 16h-13" /><path d="M5.107 14.988l6.122 -10.201" /><circle cx={12} cy={3.5} r={1.5} /><circle cx={12} cy={20.5} r={1.5} /><circle cx={4} cy={8} r={1.5} /><circle cx={4} cy={16} r={1.5} /><circle cx={20} cy={16} r={1.5} /><circle cx={20} cy={8} r={1.5} /></svg>;
});

export default IconBrandGraphql;