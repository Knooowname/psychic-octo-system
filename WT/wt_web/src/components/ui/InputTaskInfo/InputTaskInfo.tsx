'use client'

interface Props {
    label?: string,
    type: 'text' | 'date',
    placeholder: string,
    disabled?: boolean,
}

export function InputTaskInfo({label, type, placeholder, disabled}: Props) {
    return (
        <label className="flex flex-col gap-[4px] items-start">
            <span className="font-light text-sm text-gray-600">
                {label}
            </span>
            <input className="pl-2 w-60 h-10 bg-white outline-0 rounded text-sm text-black-300 font-normal" type={type} placeholder={placeholder} disabled={disabled}/>
        </label>
    )
}