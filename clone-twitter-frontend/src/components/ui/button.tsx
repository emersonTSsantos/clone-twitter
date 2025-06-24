type Props = {
    label: string;
    onclick?: () => void;
    size: 1 | 2 | 3;
}

export const Button = ({ label, onclick, size }: Props ) => {

    return (
        <div 
            onClick={onclick} 
            className={`flex items-center justify-center cursor-pointer bg-gray-200 text-black font-bold rounded-3xl hover:bg-white transition-colors

                ${size === 1 && 'h-14 text-lg'}
                ${size === 2 && 'h-10 text-md'}
                ${size === 3 && 'h-7 text-xs'}
            `}
        >
            {label}
        </div>
    )
}