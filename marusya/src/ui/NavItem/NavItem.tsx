import { FC } from "react"
import './NavItem.css'

export type NavItem = {
    title: string, 
    variant?: 'active' | 'default',
}

export const NavItem: FC<NavItem> = ({title, variant = 'default'}) => {
    return (
        <button className="nav_btn" data-variant={variant}>
            {title}
        </button>
    )
}


// export interface IButtonProps {
//     title: string;
//     variant?: 'primary' | 'secondary';
//     type?: 'button' | 'submit' | 'reset';
//     size?: 'small' | 'medium';
//     onClick?: MouseEventHandler<HTMLButtonElement>;
//     isLoading?: boolean;
//     isDisabled?: boolean;
//   }
  
//   export const Button: FC<IButtonProps> = ({
//     type,
//     title,
//     onClick,
//     isLoading,
//     isDisabled,
//     variant = 'primary',
//     size = 'medium',
//   }) => {
//     return (
//       <button
//         className="button"
//         type={type}
//         onClick={onClick}
//         disabled={isDisabled || isLoading}
//         data-variant={variant}
//         data-size={size}
//       >
//         {isLoading ? <Loader color="white" /> : title}
//       </button>
//     );
//   };
  