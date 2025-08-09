'use client'

import { Priority } from "@/shared/types/priority.types"
import { Status } from "@/shared/types/status.types"
import { User } from "@/shared/types/user.types"

interface SelectProps {
    label: string,
    options: User[] | Status[] | Priority[],
}

function isUser(obj: any): obj is User {
  return obj && typeof obj.firstname === 'string' && typeof obj.lastname === 'string';
}

function isStatus(obj: any): obj is Status {
  return obj && typeof obj.namestatus === 'string';
}

function isPriority(obj: any): obj is Priority {
  return obj && typeof obj.namepriority === 'string';
}

export function Select({ label, options }: SelectProps) {
  return (
    <label className="flex flex-col gap-[4px]">
      <span className="font-light text-sm text-gray-400">{label}</span>
      <select className="bg-white w-60 h-10 rounded text-sm text-black-300 font-normal pl-1">
        {options.map((item) => {
          let labelValue = '';

          if (isUser(item)) {
            labelValue = `${item.firstname} ${item.lastname}`;
          } else if (isStatus(item)) {
            labelValue = item.namestatus;
          } else if (isPriority(item)) {
            labelValue = item.namepriority;
          }

          return (
            <option key={item.id} value={item.id}>
              {labelValue}
            </option>
          );
        })}
      </select>
    </label>
  );
}
