"use client";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

type Props = {
    placeholder: string;
    value?: string;
    password?: boolean;
    filled?: boolean;
    icon?: IconDefinition;
    onChange?: (newValue: string) => void;
}

export const Input = ({ placeholder, value, password, icon, filled, onChange }: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-800 ${filled && 'bg-gray-800'} `}>
            {icon &&
                <FontAwesomeIcon 
                    icon={icon}
                    className="size-6 text-gray-500 hover:text-white transition-colors duration-300"
                />
            }
            <input
                type={password ? "password" : "text"}
                className="flex-1 bg-transparent outline-none h-full px-4"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
            />
            {password && (
                <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className={`cursor-pointer mr-4 size-6 ${showPassword ? 'text-white ' : 'text-gray-500'}`}
                    onClick={() => setShowPassword(!showPassword)}
                />
            )}

        </div>
    );
};
