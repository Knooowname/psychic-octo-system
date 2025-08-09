import React, { FC } from "react";
import './AdminFilterCard.css'
import { Material } from "../../../shared/types/material.types";

interface AdminFilterCardProps {
    filterName: string,
    subFilters: Material[]
}

export const AdminFilterCard: FC<AdminFilterCardProps> = ({ filterName, subFilters }) => {
    return (
        <div className="admin_all_filters_card">
            <h4 className="admin_all_filters_title">
                {filterName}
            </h4>
            <ul className="admin_all_filters_subfilters_list">
                {subFilters.map((item) => (
                    <li className="admin_all_filters_subfilters_item" key={item.id}>
                        <span className="admin_all_filters_subfilters_descr">
                            {item.name_material}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}